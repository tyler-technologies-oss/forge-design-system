
import React from 'react';
import clsx from 'clsx';
import styles from './status-badges.module.css';

export default function StatusBadges({ badges }): JSX.Element {
  return (
    <div className={clsx(styles.container)}>
      {badges.map(({ type = 'primary', label, tooltip }, index) => (
        <span key={`status-badge-${index}`} className={clsx('badge', `badge--${type}`)} title={tooltip}>{label}</span>
      ))}
    </div>
  );
}
