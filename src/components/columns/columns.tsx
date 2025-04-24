import React from 'react';
import clsx from 'clsx';

import styles from './columns.module.css';

const Columns = ({ children, type, columns, denseSpacing = false }) => {

  const columnTypeClasses = clsx(
    {
      [styles.equal]: type === 'equal',
      [styles.oneThird]: type === 'oneThird',
      [styles.twoThird]: type === 'twoThirds',
    }
  );

  const columnNumberClasses = clsx(
    {
      [styles.two]: columns === 'two',
      [styles.three]: columns === 'three',
      [styles.four]: columns === 'four'
    }
  )

  const containerGridClasses = clsx(
    styles.containerGrid,
    {
      [styles.containerGrid]: !denseSpacing,
      [styles.cardContainerGrid]: denseSpacing,
    }
  )

  return (
    <div className={clsx(columnTypeClasses, columnNumberClasses, containerGridClasses)}>{children}</div>
  );
};

export default Columns;
