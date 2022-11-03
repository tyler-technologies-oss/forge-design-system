import React from 'react';
import clsx from 'clsx';

import styles from './do-dont-grid.module.css';

const DoDontGrid = ({ children, titleText, vertical }) => {
 return (
  <>
    <h2 className={clsx('tyl-typography--headline5', styles.header)}>{titleText || 'Best practices'}</h2>
    <div className={styles.container}>{children}</div>
  </>
 );
};

export default DoDontGrid;
