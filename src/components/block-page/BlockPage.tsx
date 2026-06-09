import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import BlockViewer from '../block-viewer/BlockViewer';
import styles from './BlockPage.module.css';

interface BlockData {
  id: string;
  name: string;
  description: string;
  tags: string[];
  file: string;
  baseUrl: string;
  iframeUrl: string;
}

interface Props {
  blockData: BlockData;
}

export default function BlockPage({ blockData }: Props): JSX.Element {
  const { name, description, iframeUrl } = blockData;

  return (
    <Layout title={name} description={description}>
      <main className={styles.container}>
        <article className={styles.article}>
          <header className={styles.header}>
            <div className={styles.titleRow}>
              <Link to="/blocks" className={styles.backLink} aria-label="Back to all blocks">
                <span className={styles.backArrow}>←</span>
              </Link>
              <h1>{name}</h1>
            </div>
            <p className={styles.description}>{description}</p>
          </header>

          <section className={styles.preview}>
            <BlockViewer title={name} iframeUrl={iframeUrl} />
            <a
              href={iframeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.openLink}
            >
              Open in new tab →
            </a>
          </section>
        </article>
      </main>
    </Layout>
  );
}
