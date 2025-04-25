import React, { useEffect, useState } from 'react';

import styles from './glossary-item-header.module.css';
import useBrokenLinks from '@docusaurus/useBrokenLinks';

const GlossaryItemHeader = ({ title, icon }) => {
  const [svgContent, setSvgContent] = useState('');

  useBrokenLinks().collectAnchor(title.toLowerCase());

  useEffect(() => {
    if (icon) {
      fetch(`https://cdn.forge.tylertech.com/v1/icons/svg/all/${icon}.svg`)
        .then(response => response.text())
        .then(setSvgContent)
        .catch(console.error);
    }
  }, [icon]);

  return (
    <div className={styles.container}>
      <h3 id={title.toLowerCase()} style={{ scrollMarginTop: '0.5rem' }}>{title}</h3>
      {svgContent && (
        <div
          className={styles.icon}
          dangerouslySetInnerHTML={{ __html: svgContent }}
        />
      )}
    </div>
  );
};

export default GlossaryItemHeader;