import React, { useRef, useState } from 'react';
import styles from './BlockViewer.module.css';

type Viewport = 'desktop' | 'tablet' | 'phone' | 'responsive';

const viewportWidths: Record<Viewport, string> = {
  desktop: '100%',
  tablet: '768px',
  phone: '375px',
  responsive: '100%',
};

interface BlockViewerProps {
  title: string;
  iframeUrl: string;
}

export default function BlockViewer({ title, iframeUrl }: BlockViewerProps): JSX.Element {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [viewport, setViewport] = useState<Viewport>('desktop');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    iframeRef.current?.contentWindow?.postMessage(
      { type: 'forge-theme-change', theme: newTheme },
      '*'
    );
  };

  const reloadIframe = () => {
    if (iframeRef.current) {
      iframeRef.current.src = iframeUrl;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.toolbar}>
        <span className={styles.title}>{title}</span>
        <div className={styles.toolbarActions}>
          <div className={styles.viewportToggle}>
            <button
              onClick={() => setViewport('desktop')}
              className={`${styles.viewportButton} ${viewport === 'desktop' ? styles.active : ''}`}
              aria-label="Desktop view"
              title="Desktop"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </button>
            <button
              onClick={() => setViewport('tablet')}
              className={`${styles.viewportButton} ${viewport === 'tablet' ? styles.active : ''}`}
              aria-label="Tablet view"
              title="Tablet (768px)"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="4" y="2" width="16" height="20" rx="2" />
                <line x1="12" y1="18" x2="12" y2="18" strokeLinecap="round" />
              </svg>
            </button>
            <button
              onClick={() => setViewport('phone')}
              className={`${styles.viewportButton} ${viewport === 'phone' ? styles.active : ''}`}
              aria-label="Phone view"
              title="Phone (375px)"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="6" y="2" width="12" height="20" rx="2" />
                <line x1="12" y1="18" x2="12" y2="18" strokeLinecap="round" />
              </svg>
            </button>
            <button
              onClick={() => setViewport('responsive')}
              className={`${styles.viewportButton} ${viewport === 'responsive' ? styles.active : ''}`}
              aria-label="Full width view"
              title="Full width"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 3h6v6" />
                <path d="M9 21H3v-6" />
                <path d="M21 3l-7 7" />
                <path d="M3 21l7-7" />
              </svg>
            </button>
            <button
              onClick={reloadIframe}
              className={styles.viewportButton}
              aria-label="Reload preview"
              title="Reload"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 2v6h-6" />
                <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
                <path d="M3 22v-6h6" />
                <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
              </svg>
            </button>
          </div>
          <button
            onClick={toggleTheme}
            className={styles.themeToggle}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
      <div className={styles.iframeContainer}>
        <div
          className={styles.iframeWrapper}
          style={{ width: viewportWidths[viewport] }}
        >
          <iframe
            ref={iframeRef}
            src={iframeUrl}
            title={`${title} preview`}
            className={styles.iframe}
          />
        </div>
      </div>
    </div>
  );
}
