import React from 'react';
import styles from './do-dont-image.module.css';

const DoDontImage = ({ children }) => <div className={styles.container}>{children.props.children}</div>;

export default DoDontImage;
