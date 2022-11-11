import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {isActiveSidebarItem} from '@docusaurus/theme-common/internal';
import Link from '@docusaurus/Link';
import isInternalUrl from '@docusaurus/isInternalUrl';
import IconExternalLink from '@theme/Icon/ExternalLink';
import styles from './styles.module.css';

/**
 * Swizzle: added a way to read `sidebar_custom_props` from a pages frontmatter to display a recipe badge.
 */
export default function DocSidebarItemLink({
  item,
  onItemClick,
  activePath,
  level,
  index,
  ...props
}) {
  const {href, label, className, autoAddBaseUrl, customProps} = item;
  const isActive = isActiveSidebarItem(item, activePath);
  const isInternalLink = isInternalUrl(href);
  return (
    <li
      className={clsx(
        ThemeClassNames.docs.docSidebarItemLink,
        ThemeClassNames.docs.docSidebarItemLinkLevel(level),
        'menu__list-item',
        className,
      )}
      key={label}>
      <Link
        className={clsx(
          'menu__link',
          !isInternalLink && styles.menuExternalLink,
          {
            'menu__link--active': isActive,
          },
        )}
        autoAddBaseUrl={autoAddBaseUrl}
        aria-current={isActive ? 'page' : undefined}
        to={href}
        {...(isInternalLink && {
          onClick: onItemClick ? () => onItemClick(item) : undefined,
        })}
        {...props}>
        <div className={styles.menuExternalLinkContainer}>
          <div className={styles.menuExternalLinkLabelContainer}>
            {customProps?.icon && <i className={clsx('menu__list-item-icon', customProps?.iconClass ?? 'tyler-icons')}>{customProps.icon}</i>}
            {label}
          </div>
          <div className={styles.menuExternalLinkEndContainer}>
            {customProps?.recipe && <div className="badge badge--primary">R</div>}
            {!isInternalLink && <IconExternalLink />}
          </div>
        </div>
      </Link>
    </li>
  );
}
