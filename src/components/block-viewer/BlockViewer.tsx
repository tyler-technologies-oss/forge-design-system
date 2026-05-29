import React from 'react';
import styles from './BlockViewer.module.css';

interface BlockViewerProps {
  title: string;
  iframeUrl: string;
}

export default function BlockViewer({ title, iframeUrl }: BlockViewerProps): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.toolbar}>
        <span className={styles.title}>{title}</span>
      </div>
      <div className={styles.iframeContainer}>
        <iframe
          src={iframeUrl}
          title={`${title} preview`}
          className={styles.iframe}
        />
      </div>
    </div>
  );
}
