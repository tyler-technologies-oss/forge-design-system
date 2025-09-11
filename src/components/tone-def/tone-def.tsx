import React from 'react';
import clsx from 'clsx';
import styles from './tone-def.module.css';

const ToneDef = ({ name, doValue, dontValue, children }) => {
  return (
    <div className={clsx(styles.container, 'card card--outlined')}>
      <div>
        <h2>{name}</h2>
        <div>{children}</div>
        <div className={styles.doDontContainer}>
          <div className={styles.doDont}>
            <i className={clsx(styles.icon, 'tyler-icons')} style={{color: 'var(--forge-theme-success)'}}>check</i>
            <div>
              <div className={styles.doDontTitle}>Do</div>
              <div>{doValue}</div>
            </div>
          </div>
          <div className={styles.doDont}>
            <i className={clsx(styles.icon, 'tyler-icons')} style={{color: 'var(--forge-theme-danger)'}}>close</i>
            <div>
              <div className={styles.doDontTitle}>Don't</div>
              <div>{dontValue}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToneDef;
