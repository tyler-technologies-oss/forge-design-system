import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

import { isAbsoluteUrl } from '../utils/utils';
import styles from './services-block.module.css';
import ConditionalWrapper from '../utils/conditional-wrapper';

const ServicesBlock = ({ cardContainer = false, action, imageBorder = false, link, children, target = '_blank' }) => {
  if (!isAbsoluteUrl(link)) {
    target = '_self';
  }

  function renderWrapper(children) {
    if (cardContainer) {
      return <div className="card card--outlined">{children}</div>;
    }
    return <div>{children}</div>;
  }

  return (
    <ConditionalWrapper condition={cardContainer} wrapper={renderWrapper}>
      <div className={clsx(styles.imageContainer, { [styles.imageBorder]: imageBorder })}>
        {children}
        <ServicesLink link={link} target={target}>
          <button type="button" class="button button--primary">{action}</button>
        </ServicesLink>
      </div>
    </ConditionalWrapper >
  )
};

const ServicesLink = ({ children, target, link }) => {
  return (target === '_blank' ?
    <a href={link} className={styles.link} target="_blank" rel="noopener noreferrer">{children}</a> :
    <Link className={styles.link} to={link}>{children}</Link>);
};

export default ServicesBlock;
