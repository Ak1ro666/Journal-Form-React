import React from 'react';
import styles from './Body.module.scss'

const Body = ({ children }) => {
   return <div className={styles.body}>{children}</div>;
};

export default Body;
