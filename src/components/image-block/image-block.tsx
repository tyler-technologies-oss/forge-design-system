import React from 'react';
import clsx from 'clsx';

import styles from './image-block.module.css';

export const ImageCaption =({ caption }) => {
  return <p className={clsx(styles.caption)} dangerouslySetInnerHTML={{__html: caption}}></p>;
};

const ImageBlock = ({ children, caption, padded = true, stretch, maxWidth = '100%' }) => {
  const imageContainerClasses = clsx(
    styles.imageContainer,
    {
      [styles.imageContainerPadded]: padded,
      [styles.imageContainerStretch]: stretch
    }
  );
  return (
    <div className={styles.container}>
      <div className={styles.captionContainer}>
      <div className={imageContainerClasses}>
        <div className={styles.imageWrapper} style={{maxWidth: maxWidth}}>{children}</div>
      </div>
      {caption && <ImageCaption caption={caption} />}
    </div>
    </div>
  );
}; 

export default ImageBlock;
