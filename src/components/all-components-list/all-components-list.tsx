
import React, { FormEventHandler, SyntheticEvent, useState } from 'react';
import clsx from 'clsx';
import { useDocsSidebar } from '@docusaurus/theme-common/internal';
import Link from '@docusaurus/Link';
import styles from './all-components-list.module.css';

const MAX_DESC_CHAR_COUNT = 135;

function ComponentCard({ label, href, customProps }): JSX.Element {
  let {
    shortDescription = ' ',
    thumbnail = '/img/component-thumb-placeholder.svg'
  } = customProps ?? {};
  if (shortDescription.length > MAX_DESC_CHAR_COUNT) {
    shortDescription = shortDescription.substr(0, MAX_DESC_CHAR_COUNT - 2) + '...';
  }
  return (
    <Link to={href} className={styles.itemAnchor}>
      <div className={clsx('card', 'card--outlined', styles.componentCard)}>
        <div className={clsx(styles.headerText)}>{label}</div>
        <div className={clsx(styles.descriptionContainer)}>
          {shortDescription && <div className={clsx(styles.descriptionContainerText)}>{shortDescription}</div>}
          {thumbnail && <div className={clsx(styles.thumbnail)} style={{backgroundImage: `url(${thumbnail})`}} />}
        </div>
      </div>
    </Link>
  );
}

export default function AllComponentsList(): JSX.Element {
  const [filterText, setFilterText] = useState('');
  const sidebar = useDocsSidebar();
  const groups = generateData(sidebar);

  function handleInput(evt: SyntheticEvent): void {
    setFilterText((evt.nativeEvent.target as HTMLInputElement).value);
  }

  console.log('render AllComponentsList', filterText);
  const filteredGroups = filterText.trim().length ? filterGroups(groups, filterText) : groups;

  return (
    <>
      <div>
        <input type="text" placeholder="Filter..." onInput={handleInput} className={styles.filterInput} />
      </div>
      {filteredGroups.map(({ label, items }, index) => {
        return (
          <div key={`${label}-${index}`} className={clsx(styles.group)}>
            <h2>{label}</h2>
            <div className={clsx(styles.gridContainer)}>
              {items.map(({ label, href, customProps }) => (
                <ComponentCard key={label} label={label} href={href} customProps={customProps} />
              ))}
            </div>
          </div>
        );
      })}
      {!filteredGroups.length && <div className={styles.empty}>No components found.</div>}
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

function filterGroups(groups, filterText) {
  return groups.filter(group => {
    group.items = group.items.filter((app) => {
      return app.label
        .toLowerCase()
        .includes(filterText.toLowerCase());
    });
    return !!group.items.length;
  });
}
