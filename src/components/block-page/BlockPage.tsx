import React from 'react';
import Layout from '@theme/Layout';
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
  const { name, description, tags, iframeUrl } = blockData;

  return (
    <Layout title={name} description={description}>
      <main className={styles.container}>
        <article className={styles.article}>
          <header className={styles.header}>
            <h1>{name}</h1>
            <p className={styles.description}>{description}</p>
            {tags.length > 0 && (
              <div className={styles.tags}>
                {tags.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            )}
          </header>

          <section className={styles.preview}>
            <h2>Preview</h2>
            <div className={styles.iframeContainer}>
              <iframe
                src={iframeUrl}
                title={`${name} preview`}
                className={styles.iframe}
              />
            </div>
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
