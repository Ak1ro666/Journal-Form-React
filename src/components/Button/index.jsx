import React from 'react';
import styles from './Button.module.scss';

const Button = ({ children, onClick }) => {
   return (
      <button onClick={onClick} className={`${styles.button} ${styles.accent}`}>
         {children}
      </button>
   );
};

export default Button;
