import React from 'react';
import clsx from 'clsx';

import styles from './right-column.module.css';

const RightColumn = ({ children }) => {
  return (
    <p className={clsx('secondary', styles.removeMargin)}>{children}</p>
  )
};

export default RightColumn;

