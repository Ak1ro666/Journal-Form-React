import React from 'react';
import styles from './CardButton.module.scss';

const CardButton = ({ children, className, ...props }) => {
   const cl = `${styles.cardButton} ${className ? className : ''}`;

   return (
      <button {...props} className={cl}>
         {children}
      </button>
   );
};

export default CardButton;
