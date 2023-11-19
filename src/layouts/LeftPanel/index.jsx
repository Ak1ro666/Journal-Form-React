import React from 'react';
import styles from './LeftPanel.module.scss';

const LeftPanel = ({ children }) => {
   return <div className={styles.leftPanel}>{children}</div>;
};

export default LeftPanel;
