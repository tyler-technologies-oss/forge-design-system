import React from 'react';
import clsx from 'clsx';

import styles from './do-dont.module.css';

const iconMap = {
  do: 'check_circle_outline',
  dont: 'cancel',
  caution: 'warning'
};

const iconLabelMap = {
  do: 'Do',
  dont: 'Don\'t.',
  caution: 'Caution'
};


const DoDontIcon = ({ type }) => {
  const iconContainerClasses = clsx(
    styles.iconContainer,
    {
      [styles.iconDo]: type === 'do',
      [styles.iconDont]: type === 'dont',
      [styles.iconCaution]: type === 'caution'
    }
  );
  return (
    <div className={iconContainerClasses}>
      <i className="tyler-icons">{iconMap[type]}</i>
      <span className={styles.iconLabel}>{iconLabelMap[type]}</span>
    </div>
  );
};

export const DoDontText = ({ type = 'do', children }) => {  
  const iconClasses = clsx(
    'tyler-icons',
    styles.iconHorizontal,
    {
      [styles.iconDo]: type === 'do',
      [styles.iconDont]: type === 'dont',
      [styles.iconCaution]: type === 'caution'
    }
  );
  return (
    <div className={styles.iconContainerHorizontal}>
      <i className={iconClasses}>{iconMap[type]}</i>
      <p className={clsx('tyl-typography--body1', styles.captionHorizontal)}>{children}</p>
    </div>
  );
};

const DoDont = ({ type = 'do', captionTitle, children }) => {
  return (
    <div className={styles.container}>
      <div>
        <DoDontIcon type={type} />
        <div>
          {captionTitle && <p className={clsx('tyl-typography--subtitle1', styles.captionTitle)}>{captionTitle}</p>}
          {children && <p className={clsx('tyl-typography--body1', styles.caption)}>{children}</p>}
        </div>
      </div>
    </div>
  );
};

export default DoDont;
