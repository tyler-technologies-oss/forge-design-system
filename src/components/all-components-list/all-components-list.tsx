
import React from 'react';
import clsx from 'clsx';
import { useDocsSidebar } from '@docusaurus/theme-common/internal';
import Link from '@docusaurus/Link';
import styles from './all-components-list.module.css';

export default function AllComponentsList({}): JSX.Element {
  const sidebar = useDocsSidebar();
  const groups = generateData(sidebar);
  return (
    <>
      {groups.map(({label, items }, index) => {
        return (
          <div key={`${label}-${index}`} className={clsx(styles.group)}>
            <h2>{label}</h2>
            <div className={clsx(styles.gridContainer)}>
              {items.map(({ label, href, customProps }) => {
                const { shortDescription, thumbnail = 'https://cdn.forge.tylertech.com/v1/icons/svg/custom/forge_logo.svg' } = customProps ?? {};
                return (
                  <Link key={label} to={href} className={styles.itemAnchor}>
                    <div className={clsx('card', 'card--outlined', styles.componentCard)}>
                      <div className={clsx(styles.headerText)}>{label}</div>
                      <div className={clsx(styles.descriptionContainer)}>
                        {shortDescription && <div className={clsx(styles.descriptionContainerText)}>{shortDescription}</div>}
                        {thumbnail && <img className={clsx(styles.thumbnail)} src={thumbnail} />}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}

function generateData(sidebar): any {
  return sidebar.items
    .filter(({ type }) => type === 'category')
    .map(({ label, items }) => {
      return {
        label: label,
        items: items.filter(({ type }) => type === 'link').map(({ label, href, customProps }) => ({ label, href, customProps }))
      }
    });
}
