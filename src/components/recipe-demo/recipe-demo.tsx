import Link from '@docusaurus/Link';
import React from 'react';

import styles from './recipe-demo.module.css';

// Properties are documented at https://developer.stackblitz.com/docs/platform/embedding
const RecipeDemo = ({
  children,
  href,
  componentList = '',
  padded = true,
  file = 'index.html',
  embed = 1,
  hideExplorer = 0,
  hideNavigation = 1,
  ctl = 0,
  view = 'preview',
  hidedevtools = 1
}) => {
  const [showFrame, setShowFrame] = React.useState(false);
  const componentListTag = componentList && <RecipeComponentList>{componentList}</RecipeComponentList>;
  const normalizedHref = ~href.indexOf('?') ? href : href + makeQueryString({
    file,
    embed,
    hideExplorer,
    hideNavigation,
    ctl,
    view,
    hidedevtools
  });

  const id = href.replace(/\W/g, ''); // create a unique id from the href
  const demoClickDiv = getDemoClickDiv();
  const demoFrame = getDemoFrame(normalizedHref);
  const clickDemoContainer = showFrame ? demoFrame : demoClickDiv;

  return (
    <div>
      <div>
        {children}
      </div>
      <div className={styles.demoContainer}>
        {clickDemoContainer}
      </div>
      <div className={styles.componentList}>
        {componentListTag}
      </div>
    </div>
  );

  function makeQueryString(params) {
    return '?' + Object.keys(params).map((k, i) => encodeURIComponent(k) + '=' + encodeURIComponent(params[k])).join('&');
  }

  function getDemoFrame(normalizedHref) {
    return (
      <iframe
        src={normalizedHref}
        className={styles.recipeDemoIframe}
        title="Recipe frame"
      />
    );
  }

  function getDemoClickDiv() {
    return (
      <div className={styles.recipeContainer}>
        <button type="button" className="button button--primary" onClick={activateDemo}>
          Run project
        </button>
      </div>
    );
  }

  function activateDemo() {
    setShowFrame(true);

    // try { // do not fail if analytics does not work
    //   trackCustomEvent({ // Google Analytics
    //     category: 'Recipe',
    //     action: 'click',
    //     label: header || normalizedHref  // fallback to URL if we have no header to track
    //   });
    // } catch (ex) {
    //   console.warn(ex.message || ex);
    // }
  }
};

const RecipeComponentList = ({ children, caption = "Components used in this recipe:" }) => {
  const list = children.trim().replace(/\s+/,' ').split(' '); // convert all whitespace to a space
  const listItemList = list.map((name, index) => {
    return (
      <li key={`recipe-comp-${index}`}>
        <Link to={`/components/${name}`}>{name.replace(/-/g, ' ')}</Link>
      </li>
    );
  });

  return (
    <div>
      <div>{caption}</div>
      <ul>{listItemList}</ul>
    </div>
  );
}

export default RecipeDemo;
