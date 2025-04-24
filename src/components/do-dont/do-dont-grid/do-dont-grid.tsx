import React from 'react';
import clsx from 'clsx';

import styles from './do-dont-grid.module.css';

const DoDontGrid = ({ children, titleText, vertical }) => {
 return (
  <>
    <div className={styles.container}>{children}</div>
  </>
 );
};

export default DoDontGrid;
