import React from 'react';
import clsx from 'clsx';
import styles from './component-visual.module.css';

function ComponentDemoLink({ href }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <button type="button" className="button button--link">
        View live demo
        <svg width="12" height="12" aria-hidden="true" viewBox="0 0 24 24" style={{marginLeft: '0.3rem'}}>
          <path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path>
        </svg>
      </button>
    </a>
  );
}

export default function ComponentVisual({ storybookUrl, children }): JSX.Element {
  return (
    <div className={styles.container}>
      {storybookUrl &&
        <div className={clsx(styles.headerContainer)}>
          <ComponentDemoLink href={storybookUrl} />
        </div>}
      {children}
    </div>
  );
}
