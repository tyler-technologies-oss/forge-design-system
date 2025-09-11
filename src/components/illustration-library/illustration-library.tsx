import React, { SyntheticEvent, useEffect, useState } from 'react';
import InputField from '../controls/text-input/text-input';
import styles from './illustration-library.module.css';

const MORE_ILLUSTRATIONS_INCREMENT = 24;
const METADATA_URI = 'https://cdn.forge.tylertech.com/v1/metadata/illustrations/illustration-metadata.json';

interface IIllustration {
  name: string;
  formats: string[];
  urls: Array<IIllustrationUrl>;
  type: 'spot' | 'spot-hero' | 'hero';
  keywords: string[];
  preferredUrl: string;
}

interface IIllustrationUrl {
  type: string;
  url: string;
}

type IllustrationMetadata = Array<IIllustration>;

export default function IllustrationLibrary() {
  const [isLoading, setLoading] = useState(true);
  const [filterText, setFilterText] = useState('');
  const [spotIllustrations, setSpotIllustrations] = useState([]);
  const [spotHeroIllustrations, setSpotHeroIllustrations] = useState([]);
  const [heroIllustrations, setHeroIllustrations] = useState([]);

  const fetchMetadata = async (): Promise<void> => {
    try {
      const { spots, spotHeros, heros } = await loadData();
      setSpotIllustrations(spots);
      setSpotHeroIllustrations(spotHeros);
      setHeroIllustrations(heros);
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
      {isLoading && <div className={styles.loading}>Loading illustrations...</div>}
      {!isLoading &&
        <>
          <IllustrationGrid header="Spot" illustrations={spotIllustrations} filterText={filterText} />
          <IllustrationGrid header="Spot hero" illustrations={spotHeroIllustrations} filterText={filterText} />
          <IllustrationGrid header="Hero" illustrations={heroIllustrations} filterText={filterText} />
        </>}
    </div>
  );
}

function IllustrationGrid({ header, illustrations, filterText }) {
  const [visibleIllustrations, setVisibleIllustrations] = useState([]);
  const [canShowMore, setCanShowMore] = useState(true);
  
  useEffect(() => {
    calcVisibleIllustrations([]);
  }, [filterText]);

  function calcVisibleIllustrations(currentIllustrations) {
    const filteredIllustrations = filterIllustrations(illustrations);
    const renderIllustrations = filteredIllustrations.slice(0, currentIllustrations.length + MORE_ILLUSTRATIONS_INCREMENT);
    setVisibleIllustrations(renderIllustrations);
    setCanShowMore(filteredIllustrations.length > MORE_ILLUSTRATIONS_INCREMENT);
  }

  function filterIllustrations(illustrations) {
    return illustrations.filter(i => {
      return [i.name, ...i.keywords].some(val => val.trim().toLowerCase().includes(filterText.trim().toLowerCase()));
    });
  }

  return (
    <>
      <h2 className={styles.illustrationGridHeader}>{header}</h2>
      {!!visibleIllustrations.length &&
        <>
          <div className={styles.illustrationGrid}>
            {visibleIllustrations.map(({ name, preferredUrl }) => <Illustration key={name} name={name} url={preferredUrl} />)}
          </div>
          {canShowMore && 
            <div className={styles.buttonContainer}>
              <button className="button button--primary" type="button" onClick={() => calcVisibleIllustrations(visibleIllustrations)}>Show more...</button>
            </div>}
        </>}
      {visibleIllustrations.length === 0 && <div>No matching illustrations</div>}
    </>
  );
}

function Illustration({ name, url }) {
  return (
    <div className={styles.illustrationContainer}>
      <div className={styles.illustrationLabel}>{name}</div>
      <div className={styles.illustration}>
        <img loading="lazy" src={url} alt="" />
      </div>
      <div className={styles.illustrationActions}>
        <button className="clean-btn" type="button" onClick={() => downloadImage(url)} title="Download image">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
        </button>

        <button className="clean-btn" type="button" onClick={() => navigator.clipboard.writeText(`<img src="${url}" alt="" />`)} title="Copy code">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
        </button>

        <button className="clean-btn" type="button" onClick={() => navigator.clipboard.writeText(url)} title="Copy CDN link">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>
        </button>
      </div>
    </div>
  );
}

async function loadData() {
  const response = await window.fetch(`${METADATA_URI}?t=${new Date().getTime()}`, { cache: 'no-cache' });
  const data = await response.json() as IllustrationMetadata;
  
  const spots = [];
  const spotHeros = [];
  const heros = [];

  data.forEach(illustration => {
    switch (illustration.type) {
      case 'spot':
        spots.push(illustration);
        break;
      case 'spot-hero':
        spotHeros.push(illustration);
        break;
      case 'hero':
        heros.push(illustration);
        break;
      default:
        break;
    }
  });

  return { spots, spotHeros, heros };
}

function downloadImage(url) {
  const imageDownloadName = new URL(url).pathname.split('/').pop();
  var xhr = new XMLHttpRequest();
  xhr.open('GET', `${url}?x-forge=true`, true);
  xhr.responseType = 'blob';
  xhr.onload = function() {
    var urlCreator = window.URL || window.webkitURL;
    var imageUrl = urlCreator.createObjectURL(this.response);
    var tag = document.createElement('a');
    tag.href = imageUrl;
    tag.download = imageDownloadName;
    document.body.appendChild(tag);
    tag.click();
    document.body.removeChild(tag);
  };
  xhr.send();
}
