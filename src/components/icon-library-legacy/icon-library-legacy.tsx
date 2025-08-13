import React, { SyntheticEvent, useEffect, useState } from 'react';
import InputField from '../controls/text-input/text-input';
import styles from './icon-library-legacy.module.css';

const MORE_ICONS_INCREMENT = 80;
const METADATA_URI = 'https://cdn-new.forge.tylertech.com/v1/metadata/icons/tyler-icons-metadata-svg.v1.json';

interface IIconSet {
  identifier: string;
  name: 'Standard' | 'Extended' | 'Custom';
  count: number;
  icons: Array<IIcon>;
}

interface IIcon {
  name: string;
  data: string;
}

type IconMetadata = Array<IIconSet>;

export default function IconLibraryLegacy() {
  const [isLoading, setLoading] = useState(true);
  const [filterText, setFilterText] = useState('');
  const [standardIcons, setStandardIcons] = useState([]);
  const [extendedIcons, setExtendedIcons] = useState([]);
  const [customIcons, setCustomIcons] = useState([]);

  const fetchMetadata = async (): Promise<void> => {
    try {
      const response = await window.fetch(`${METADATA_URI}?t=${new Date().getTime()}`);
      const data = await response.json() as IconMetadata;
      setStandardIcons(data.find(({ name }) => name === 'Standard').icons);
      setExtendedIcons(data.find(({ name }) => name === 'Extended').icons);
      setCustomIcons(data.find(({ name }) => name === 'Custom').icons);
      setLoading(false);
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
    <div>
      <InputField onInput={handleFilter} placeholder="Filter..." />
      {isLoading && <div className={styles.loading}>Loading icons...</div>}
      {!isLoading &&
        <>
          <IconGrid header="Standard icons" iconSet={standardIcons} filterText={filterText} />
          <IconGrid header="Extended icons" iconSet={extendedIcons} filterText={filterText} />
          <IconGrid header="Custom icons" iconSet={customIcons} filterText={filterText} />
        </>}
    </div>
  );
}

function IconGrid({ header, iconSet, filterText }) {
  const [visibleIcons, setVisibleIcons] = useState([]);
  const [canShowMore, setCanShowMore] = useState(true);
  
  useEffect(() => {
    calcVisibleIcons([]);
  }, [filterText]);

  function calcVisibleIcons(currentIcons) {
    const filteredIcons = filterIcons(iconSet);
    const renderIcons = filteredIcons.slice(0, currentIcons.length + MORE_ICONS_INCREMENT);
    setVisibleIcons(renderIcons);
    setCanShowMore(filteredIcons.length > MORE_ICONS_INCREMENT);
  }

  function filterIcons(icons) {
    return icons.filter(i => i.name.trim().toLowerCase().includes(filterText.trim().toLowerCase()))
  }

  return (
    <>
      <h2 className={styles.iconGridHeader}>{header}</h2>
      {!!visibleIcons.length &&
        <>
          <div className={styles.iconGrid}>
            {visibleIcons.map(({ name, data }) => <Icon key={name} name={name} data={data} />)}
          </div>
          {canShowMore && 
            <div className={styles.buttonContainer}>
              <button className="button button--primary" type="button" onClick={() => calcVisibleIcons(visibleIcons)}>Show more...</button>
            </div>}
        </>}
      {visibleIcons.length === 0 && <div>No matching icons</div>}
    </>
  );
}

function Icon({ name, data }) {
  return (
    <div className={styles.iconContainer}>
      <div className={styles.iconLabel}>{name}</div>
      <div className={styles.icon} dangerouslySetInnerHTML={{ __html: data }}></div>
      <div className={styles.iconActions}>
        <button className="clean-btn" type="button" onClick={() => navigator.clipboard.writeText(data)} title="Copy SVG data">
          <svg viewBox="0 0 24 24">
            <path d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}