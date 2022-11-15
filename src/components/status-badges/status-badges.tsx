
import React from 'react';
import clsx from 'clsx';
import styles from './status-badges.module.css';
import BADGE_TYPES from '@site/src/utils/badge-types';

export default function StatusBadges({ badges }): JSX.Element {
  return (
    <div className={clsx(styles.container)}>
      {badges.map((type, index) => {
        if (!BADGE_TYPES[type]) {
          return null;
        }
        const { label, tooltip, className } = BADGE_TYPES[type];
        return <span key={`status-badge-${index}`} className={clsx('badge', className)} title={tooltip}>{label}</span>;
      })}
    </div>
  );
}
