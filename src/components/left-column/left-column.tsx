import React from 'react';
import clsx from 'clsx';

import styles from './left-column.module.css';

const LeftColumn = ({ typeName, typeClass, children }) => {
  return (
    <div>
      <span className={typeClass}>{typeName}</span>
      <p className={clsx(styles.codeStyling, styles.widthMaxContent)}>{typeClass}</p>
      <p>{children}</p>
    </div>
  )
};

export default LeftColumn;
