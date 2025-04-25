import React, { SyntheticEvent, useEffect, useState, createContext, useContext } from 'react';
import { useRef } from 'react';
import InputField from '../controls/text-input/text-input';

import styles from './icon-library.module.css';
import CodeBlock from '@site/src/theme/CodeBlock';
import CopyButton from '@site/src/theme/CodeBlock/CopyButton';

const MORE_ICONS_INCREMENT = 100;
const SCROLL_THRESHOLD = 500;
const METADATA_URI = 'https://cdn.forge.tylertech.com/v1/metadata/icons/tyler-icons-metadata-all.json';

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
      <InputField onInput={handleFilter} placeholder="Filter..." />
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
    const lowerCaseFilterText = filterText.trim().toLowerCase();
  
    return icons.filter(icon => {
      const nameMatches = icon.name?.trim().toLowerCase().includes(lowerCaseFilterText);
      const keywordsMatch = icon.keywords?.some(kw =>
        kw.trim().toLowerCase().includes(lowerCaseFilterText)
      );
  
      return nameMatches || keywordsMatch;
    });
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
