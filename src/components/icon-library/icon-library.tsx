import React, { SyntheticEvent, useEffect, useState, createContext, useContext } from 'react';
import { useRef } from 'react';
import InputField from '../controls/text-input/text-input';

import styles from './icon-library.module.css';
import CodeBlock from '@site/src/theme/CodeBlock';
import CopyButton from '@site/src/theme/CodeBlock/CopyButton';
import { computeStringSimilarity, debounce } from '../utils/utils';

const MORE_ICONS_INCREMENT = 100;
const SCROLL_THRESHOLD = 500;
const METADATA_URI = 'https://cdn.forge.tylertech.com/v1/metadata/icons/tyler-icons-metadata-all.json';

type MatchType = 
  | 'exact_name'
  | 'name_prefix' 
  | 'name_contains'
  | 'name_fuzzy'
  | 'exact_keyword'
  | 'keyword_prefix'
  | 'keyword_contains'
  | 'keyword_fuzzy';

const MATCH_TYPE_PRIORITY: Record<MatchType, number> = {
  'exact_name': 1,
  'name_prefix': 2,
  'name_contains': 3,
  'name_fuzzy': 4,
  'exact_keyword': 5,
  'keyword_prefix': 6,
  'keyword_contains': 7,
  'keyword_fuzzy': 8
} as const;

interface IIconContext {
  currentIcon: IIcon | null;
  setCurrentIcon: (icon: IIcon | null) => void;
}

const IconContext = createContext<IIconContext>({
  currentIcon: null,
  setCurrentIcon: () => {}
});

function useIconContext() {
  return useContext(IconContext);
}

interface IIcon {
  name: string;
  data: string;
}

export default function IconLibrary() {
  const [isLoading, setIsLoading] = useState(true);
  const [filterText, setFilterText] = useState('');
  const [icons, setIcons] = useState([]);
  const [currentIcon, setCurrentIcon] = useState<IIcon | null>(null); 

  const fetchMetadata = async (): Promise<void> => {
    try {
      const response = await window.fetch(`${METADATA_URI}?t=${new Date().getTime()}`);
      const data = await response.json() as IIcon[];
      setIcons(data);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  }
  
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    fetchMetadata();
  }, []);

  function handleFilter(evt: SyntheticEvent): void {
    setFilterText((evt.nativeEvent.target as HTMLInputElement).value);
  }

  return (
    <IconContext.Provider value={{ currentIcon, setCurrentIcon }}>
      <InputField onInput={debounce(handleFilter)} placeholder="Filter..." />
      {isLoading && <div className={styles.loading}>
        <Loading />
      </div>}
      {!isLoading &&
        <>
          <IconDialog />
          <IconGrid icons={icons} filterText={filterText} />
        </>}
    </IconContext.Provider>
  );
}

function Loading() {
  return (
    <div className={styles.iconGrid}>
      {Array.from({ length: MORE_ICONS_INCREMENT / 2 }).map((_, index) => (
        <div key={index} className={styles.skeleton}></div>
      ))}
    </div>
  );
}

function IconGrid({ icons, filterText }) {
  const [visibleIcons, setVisibleIcons] = useState([]);

  useEffect(() => {
    // Reset visible icons when filter changes
    calcVisibleIcons([]);
  }, [filterText]);

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      // Trigger when within 300px of bottom
      if (scrollTop + windowHeight >= fullHeight - SCROLL_THRESHOLD) {
        calcVisibleIcons(visibleIcons);
      }
    }

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [visibleIcons, icons, filterText]);

  function calcVisibleIcons(currentIcons) {
    const filteredIcons = filterIcons(icons);
    const newLength = Math.min(currentIcons.length + MORE_ICONS_INCREMENT, filteredIcons.length);
    const renderIcons = filteredIcons.slice(0, newLength);
    setVisibleIcons(renderIcons);
  }

  function filterIcons(icons) {
    if (!filterText?.trim()) {
      return icons;
    }
    
    const query = filterText.trim().toLowerCase();
    const results = [];
    
    for (const icon of icons) {
      const iconName = icon.name?.trim().toLowerCase() || '';
      const keywords = icon.keywords?.map(kw => kw.trim().toLowerCase()) || [];
      
      let bestMatch = {
        icon,
        score: 0,
        matchType: 'none',
        matchedTerm: ''
      };
      
      // 1. Check for exact name match (highest priority)
      if (iconName === query) {
        bestMatch = { icon, score: 1, matchType: 'exact_name', matchedTerm: iconName };
      }
      // 2. Check if name starts with query
      else if (iconName.startsWith(query)) {
        bestMatch = { icon, score: 0.9, matchType: 'name_prefix', matchedTerm: iconName };
      }
      // 3. Check if name contains query
      else if (iconName.includes(query)) {
        bestMatch = { icon, score: 0.8, matchType: 'name_contains', matchedTerm: iconName };
      }
      // 4. Check fuzzy name match (for typos)
      else if (iconName.length > 0) {
        const nameSimilarity = computeStringSimilarity(iconName, query);
        if (nameSimilarity >= 0.6) { // Adjust threshold as needed
          bestMatch = { icon, score: nameSimilarity * 0.7, matchType: 'name_fuzzy', matchedTerm: iconName };
        }
      }
      
      // 5. Check keyword matches (lower priority than name matches)
      for (const keyword of keywords) {
        let keywordScore = 0;
        let keywordMatchType = 'none';
        
        if (keyword === query) {
          keywordScore = 0.6; // Lower than name matches
          keywordMatchType = 'exact_keyword';
        } else if (keyword.startsWith(query)) {
          keywordScore = 0.5;
          keywordMatchType = 'keyword_prefix';
        } else if (keyword.includes(query)) {
          keywordScore = 0.4;
          keywordMatchType = 'keyword_contains';
        } else {
          const keywordSimilarity = computeStringSimilarity(keyword, query);
          if (keywordSimilarity >= 0.7) {
            keywordScore = keywordSimilarity * 0.3;
            keywordMatchType = 'keyword_fuzzy';
          }
        }
        
        // Update best match if this keyword scores higher
        if (keywordScore > bestMatch.score) {
          bestMatch = { icon, score: keywordScore, matchType: keywordMatchType, matchedTerm: keyword };
        }
      }
      
      // Only include icons with meaningful matches
      if (bestMatch.score > 0) {
        results.push(bestMatch);
      }
    }
    
    // Sort by score (descending), then by match type priority, then alphabetically    
    results.sort((a, b) => {
      // First sort by score
      if (b.score !== a.score) {
        return b.score - a.score;
      }

      // Then by match type priority
      if (MATCH_TYPE_PRIORITY[a.matchType] !== MATCH_TYPE_PRIORITY[b.matchType]) {
        return MATCH_TYPE_PRIORITY[a.matchType] - MATCH_TYPE_PRIORITY[b.matchType];
      }

      // Finally alphabetically by icon name
      return (a.icon.name || '').localeCompare(b.icon.name || '');
    });
    
    return results.map(result => result.icon);
  } 

  return (
    <>
      {!!visibleIcons.length && (
        <div className={styles.iconGrid}>
          {visibleIcons.map(({ name, data }) => (
            <Icon key={name} name={name} data={data} />
          ))}
        </div>
      )}
      {visibleIcons.length === 0 && 
      <div className={styles.emptyState}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.27 18.9c.43-.69.68-1.52.68-2.4 0-2.5-2-4.5-4.49-4.5s-4.5 2-4.5 4.5 2 4.5 4.5 4.5c.87 0 1.69-.25 2.38-.68l3.12 3.07L22.35 22zm-3.81.1c-1.39 0-2.5-1.12-2.5-2.5s1.11-2.5 2.5-2.5 2.49 1.12 2.49 2.5-1.11 2.5-2.49 2.5M22 14h-.55c-.33-.81-.83-1.53-1.45-2.14V10h2zM20 4h-3V2h3a2 2 0 0 1 2 2v3h-2zm-6 0h-4V2h4zM4 2h3v2H4v3H2V4a2 2 0 0 1 2-2m8 20h-2v-2c.5.82 1.2 1.5 2 2m-8-2h3v2H4a2 2 0 0 1-2-2v-3h2zm0-6H2v-4h2z"/></svg>
        <p>No icons found. Please try searching again</p>
     </div>

      }
    </>
  );
}

function IconDialog() {
  const { currentIcon, setCurrentIcon } = useIconContext();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const open = !!currentIcon;
  const name = currentIcon?.name || '';
  const data = currentIcon?.data || '';

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeDialog();
      }
    };
  
    if (open) {
      window.addEventListener('keydown', handleKeyDown);
    }
  
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);
  
  useEffect(() => {
    if (open) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [open]);

  const iconCodeSnippet = `<forge-icon name="${name}"></forge-icon>`;
  const iconButtonCodeSnippet = `<forge-icon-button aria-label="Add your label here">
  <forge-icon name="${name}"></forge-icon>
</forge-icon-button>`;

  function closeDialog() {
    setCurrentIcon(null);
  }

  return (
    <dialog className={styles.dialog} ref={dialogRef}>
      <div className={styles.dialogHeader}>
        <div className={styles.titleContainer}>
          <h1 className={`${styles.dialogTitle} forge-typography--subtitle1`}>{name}</h1>
          <CopyButton className={styles.copyButton} code={name} />
        </div>
        <button className={`clean-btn ${styles.closeButton}`} onClick={closeDialog} aria-label="Close dialog">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
        </button>
      </div>
      <div className={styles.dialogInnerContainer}>
        <div className={`${styles.dialogIcon} card shadow--lw`} dangerouslySetInnerHTML={{ __html: data }}></div>
        <div className={styles.actionsContainer}>
          <CodeBlock language="html" className={styles.codeBlock}>{data}</CodeBlock>
          <CodeBlock language="html" className={styles.codeBlock}>{iconCodeSnippet}</CodeBlock>
          <CodeBlock language="html" className={styles.codeBlock}>{iconButtonCodeSnippet}</CodeBlock>
        </div>
      </div>
    </dialog>
  );
}



function Icon({ name, data }) {
  const { setCurrentIcon } = useIconContext();

  function handleClick() {
    setCurrentIcon({ name, data });
  }

  return (
    <button className={`card ${styles.iconContainer}`} onClick={handleClick}>
      <div className={styles.iconContainerInner}>
        <div className={styles.icon} dangerouslySetInnerHTML={{ __html: data }}></div>
        <div className={styles.iconLabel}>{name}</div>
      </div>
    </button>
  );
}
