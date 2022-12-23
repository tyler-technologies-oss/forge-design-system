import Link from '@docusaurus/Link';
import React from 'react';

import styles from './recipe-demo.module.css';

// Properties are documented at https://developer.stackblitz.com/docs/platform/embedding
const RecipeDemo = ({
  children,
  href = 'https://stackblitz.com/edit/tyler-forge-design-system-recipes',
  file = null,
  embed = 1,
  hideExplorer = 0,
  hideNavigation = 1,
  ctl = 1,
  view = 'preview',
  initialpath = null,
  hidedevtools = 1,
  height = '600px'
}) => {
  const normalizedHref = ~href.indexOf('?') ? href : href + makeQueryString({
    file: !file && !!initialpath ? initialpath.replace(/^\//, '')  : file,
    embed,
    hideExplorer,
    hideNavigation,
    ctl,
    view,
    hidedevtools,
    initialpath,
  });

  return (
    <div className={styles.demoContainer}>
      <iframe
        src={normalizedHref}
        className={styles.recipeDemoIframe}
        style={{height: height ?? '100%'}}
        title="Recipe frame" />
    </div>
  );

  function makeQueryString(params) {
    return '?' + Object.keys(params).map((k, i) => encodeURIComponent(k) + '=' + encodeURIComponent(params[k])).join('&');
  }
};

export default RecipeDemo;
