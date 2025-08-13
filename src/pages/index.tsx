import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';
import Link from '@docusaurus/Link';


export default function Home(): JSX.Element {
  return (
    <Layout title="Home" description="Tyler Forge design system">
      <HomepageHero />
      <main style={{overflowX: 'hidden'}}>
        <QuickLinks />
        <ContributionCategories />
      </main>
    </Layout>
  );
}

function HomepageHero() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx(styles.gridContainer, styles.heroBanner, styles.bg)}>
      <HeroCard>
        <img src="img/forge-logo.png" alt="Tyler Forge™ logo" style={{height: '72px'}} />
        <h1>{siteConfig.title}</h1>
        <p>{siteConfig.tagline}</p>
      </HeroCard>

      <HeroCard title="Figma">
        <img src="https://cdn-new.forge.tylertech.com/v1/images/spot/web-components-spot.svg" alt="" />
        <p>Explore, build, and prototype with our components using the Figma library.</p>
        <LinkButton href="https://www.figma.com/files/team/656897661529540916/Tyler-Tech---Tyler-Team?fuid=865239178726812151">Figma library</LinkButton>
      </HeroCard>

      <HeroCard title="Storybook">
        <img src="https://cdn-new.forge.tylertech.com/v1/images/spot/layout-spot.svg" alt="" />
        <p>Developer guides, component documentation, live demos, and contribution details.</p>
        <LinkButton href="https://forge.tylerdev.io">Storybook</LinkButton>
      </HeroCard>

      <HeroCard title="Code">
      <img src="https://cdn-new.forge.tylertech.com/v1/images/spot/developer-spot.svg" alt="" />
        <p>Clone the Forge component library, create pull requests, and browse the library file structure.</p>
        <LinkButton href="https://github.com/tyler-technologies-oss/forge">Code</LinkButton>
      </HeroCard>
    </header>
  );
}

function LinkButton({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferer">
      <button className={clsx(styles.linkButton, 'button button--primary')}>
        {children}
        <ExternalIcon />
      </button>
    </a>
  )
}

function ExternalIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>;
}

function HeroCard({ title = null, children }) {
  return (
    <div className={clsx(styles.heroCard, 'card card--outlined')}>
      {title && <h2>{title}</h2>}
      <div className={styles.heroCardInner}>
        {children}
      </div>
    </div>
  );
}

function QuickLinks() {
  return (
    <div className={clsx(styles.gridContainer, styles.quickLinksContainer, styles.bg)}>
      <div>
        <h2>Quick links</h2>
        <p>
          Ready to dive in or want to learn some more? Start here with some quick links to popular areas of Forge.
        </p>
      </div>
      <div className={styles.quickLinkGridItem}>
        <QuickLinkCard title="Components" path="/components" icon="category" />
        <QuickLinkCard title="Forge 101" path="/get-started" icon="school" />
      </div>
      <div className={styles.quickLinkGridItem}>
        <QuickLinkCard title="Icon library" path="/assets/icon-library" icon="photo_library" />
        <QuickLinkCard title="UX writing" path="/ux-writing" icon="keyboard" />
      </div>
      <div className={styles.quickLinkGridItem}>
        <QuickLinkCard title="Illustration library" path="/assets/illustration-library" icon="brush" />
        <QuickLinkCard title="Blog" path="/blog" icon="menu_book" />
      </div>
    </div>
  );
}

function QuickLinkCard({ title, path, icon }) {
  return (
    <Link className={styles.quickLinkAnchor} to={path}>
      <div className={clsx(styles.quickLinkCard, 'card card--outlined')}>
        <i className="tyler-icons">{icon}</i>
        <h2>{title}</h2>
      </div>
    </Link>
  );
}

function ContributionCategories() {
  return (
    <div className={styles.contributionCategories}>
      <h2 style={{margin: '16px'}}>Contribute to Forge</h2>
      <div className={styles.contributionCategoriesContainer}>
        <div className={clsx('card card--outlined', styles.contributionCard)}>
          <h2>Designers</h2>
          <img src="https://cdn-new.forge.tylertech.com/v1/images/spot/pencil-spot.svg" alt="" />
          <p>Do you have some ideas on how various components or layouts look and feel?</p>
          <Link to="/assets/designer-assets/figma">
            <button type="button" className="button button--primary">Contribute as a designer</button>
          </Link>
        </div>
        <div className={clsx('card card--outlined', styles.contributionCard)}>
          <h2>Developers</h2>
          <img src="https://cdn-new.forge.tylertech.com/v1/images/spot/blueprints-spot.svg" alt="" />
          <p>Have you or your team created something new with our components and want to share it with Forge?</p>
          <LinkButton href="https://forge.tylerdev.io/main/?path=/docs/guides-getting-started--page">Contribute as a developer</LinkButton>
        </div>
      </div>
    </div>
  );
}
