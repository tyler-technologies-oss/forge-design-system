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
      <main>
        <div className={clsx(styles.cardsContainer)}>
          <HomepageCard
            title="Design Tokens"
            description="Our design tokens provide a flexible foundation of styles that can be easily customized to match your brand."
            imagePath="https://cdn.forge.tylertech.com/v1/images/spot-hero/data-colors-spot-hero.svg"
            path="https://forge.tylerdev.io/main/?path=/docs/design-tokens-introduction--docs"
          />

          <HomepageCard
            title="Development"
            description="Forge web components are framework-agnostic, reusable UI elements that work seamlessly across any modern web application."
            imagePath="https://cdn.forge.tylertech.com/v1/images/spot-hero/components-spot-hero.svg"
            path="https://forge.tylerdev.io/main/?path=/docs/getting-started-usage--docs"
          /> 

          <HomepageCard
            title="Figma"
            description="Our Figma library mirrors our design system components, making it easy for designers to create consistent, on-brand interfaces."
            imagePath="https://cdn.forge.tylertech.com/v1/images/spot-hero/page-layout-spot-hero.svg"
            path="https://www.figma.com"
          />  
        </div>
      </main>
    </Layout>
  );
}

function HomepageHero() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={clsx(styles.hero)}>
      <div className={clsx(styles.heroTitleContainer, styles.fitContent)}>
        <span className={clsx(styles.fitContent, styles.customBadge, `badge badge--primary`)}>Forge Design System</span>
        <p>{siteConfig.tagline}</p> 
        <a className="button button--secondary" href="#url">Get started</a>
      </div>
    </div>

  );
}

function HomepageCard({ title, path, description, imagePath }) {
  return (
    <Link className={styles.quickLinkAnchor} to={path}>
      <div className={clsx(styles.homeCard, 'card card--outlined')}>
        <div className={clsx(styles.homeCardIllo)}>
          <img src={imagePath} alt="" />
        </div>
        <div className={clsx(styles.homeCardInnerContent)}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
}
