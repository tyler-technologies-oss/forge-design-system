import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner, styles.bg)}>
      <div className="card card--outlined">
        <div className="container" style={{padding: '16px'}}>
          <img src="img/forge-logo.png" style={{height: '72px'}} />
          <h1>Tyler {siteConfig.title}</h1>
          <p>{siteConfig.tagline}</p>
        </div>
      </div>
    </header>
  );
}

function QuickLinks() {
  return (
    <div className={clsx('row', styles.quickLinksContainer, styles.bg)}>
      <div className={clsx('col', 'col--3')}>
        <h2>Quick links</h2>
        <p>
          Ready to dive in or want to learn some more? Start here with some quick links to popular areas of Forge.
        </p>
      </div>
    </div>
  );
}

function ContributionCategories() {
  return (
    <div className={styles.contribution}>
      <h2 style={{margin: '24px 0'}}>Contribute to Forge</h2>
      <div style={{display: 'flex', justifyContent: 'center', gap: '16px'}}>
        <div className="card">
          <div style={{width: '300px', padding: '16px'}}>
            <h3>Designers</h3>
            <p>Do you have some ideas on how various components or layouts look and feel?</p>
            <button type="button" className="button button--primary">Contribute as a designer</button>
          </div>
        </div>
        <div className="card">
          <div style={{width: '300px', padding: '16px'}}>
            <h3>Developers</h3>
            <p>Have you or your team created something new with our components and want to share it with Forge?</p>
            <button type="button" className="button button--primary">Contribute as a developer</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout title="Home" noFooter description="Tyler Forge design system">
      <HomepageHeader />
      <main style={{overflowX: 'hidden'}}>
        <QuickLinks />
        <ContributionCategories />
      </main>
    </Layout>
  );
}
