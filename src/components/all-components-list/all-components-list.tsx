
import React from 'react';
import clsx from 'clsx';
import { useDocsSidebar } from '@docusaurus/theme-common/internal';
import Link from '@docusaurus/Link';
import styles from './all-components-list.module.css';

export default function AllComponentsList(): JSX.Element {
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
                let {
                  shortDescription = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt vero ea necessitatibus suscipit voluptatem quisquam consectetur voluptate eveniet commodi provident blanditiis libero temporibus officiis, hic sint dignissimos illo. Natus, saepe.',
                  thumbnail = '/img/components/all-components/icon_test.svg'
                } = customProps ?? {};
                if (shortDescription.length > 88) {
                  shortDescription = shortDescription.substr(0, 85) + '...';
                }
                return (
                  <Link key={label} to={href} className={styles.itemAnchor}>
                    <div className={clsx('card', 'card--outlined', styles.componentCard)}>
                      <div className={clsx(styles.headerText)}>{label}</div>
                      <div className={clsx(styles.descriptionContainer)}>
                        {shortDescription && <div className={clsx(styles.descriptionContainerText)}>{shortDescription}</div>}
                        {thumbnail && <div className={clsx(styles.thumbnail)} style={{backgroundImage: `url(${thumbnail})`}} />}
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
