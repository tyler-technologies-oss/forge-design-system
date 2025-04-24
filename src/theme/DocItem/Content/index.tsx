import React, {type ReactNode} from 'react';
import Content from '@theme-original/DocItem/Content';
import type ContentType from '@theme/DocItem/Content';
import type {WrapperProps} from '@docusaurus/types';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import StatusBadges from '@site/src/components/status-badges/status-badges';

type Props = WrapperProps<typeof ContentType>;

/**
 * Swizzle: wrapping the DocItem/Content to automatically add badges to pages that define them within frontmatter.
 */
export default function ContentWrapper(props: Props): ReactNode {
  const { frontMatter } = useDoc();
  return (
    <>
      <Content {...props} />
      {frontMatter?.sidebar_custom_props?.badge && <StatusBadges badges={[frontMatter.sidebar_custom_props.badge]} />}
    </>
  );
}
