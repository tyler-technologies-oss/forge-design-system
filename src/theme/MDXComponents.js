import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import ComponentVisual from '@site/src/components/component-visual/component-visual';
import StatusBadges from '@site/src/components/status-badges/status-badges';
import ImageBlock from '@site/src/components/image-block/image-block';
import DoDont, { DoDontText } from '@site/src/components/do-dont/do-dont/do-dont';
import DoDontGrid from '@site/src/components/do-dont/do-dont-grid/do-dont-grid';
import DoDontTextSection from '@site/src/components/do-dont/do-dont-text-section/do-dont-text-section';
import DoDontImage from '@site/src/components/do-dont/do-dont-image/do-dont-image';
import DoDontRow from '@site/src/components/do-dont/do-dont-row/do-dont-row';
import Columns from '@site/src/components/columns/columns';

export default {
  ...MDXComponents,
  blockquote: props => <blockquote {...props} className="forge-blockquote" />,
  ComponentVisual,
  StatusBadges,
  ImageBlock,
  DoDont,
  DoDontText,
  DoDontGrid,
  DoDontTextSection,
  DoDontImage,
  DoDontRow,
  Columns,
};
