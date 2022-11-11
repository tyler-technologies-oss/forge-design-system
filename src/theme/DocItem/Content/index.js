import React from 'react';
import Content from '@theme-original/DocItem/Content';
import { useDoc } from '@docusaurus/theme-common/internal';
import StatusBadges from '@site/src/components/status-badges/status-badges';

export default function ContentWrapper(props) {
  const { frontMatter } = useDoc();
  return (
    <>
      <Content {...props} />
      {frontMatter?.sidebar_custom_props?.recipe && <StatusBadges badges={[{label: 'Recipe'}]} />}
    </>
  );
}
