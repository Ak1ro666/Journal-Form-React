import React from 'react';
import cn from 'classnames';

import styles from './Input.module.scss';

const Input = React.forwardRef(function Input({ className, isValid, appearance, ...props }, ref) {
   return (
      <input
         {...props}
         ref={ref}
         className={cn(className, styles['input-title'], {
            [styles.invalid]: !isValid,
            [styles['title']]: appearance === 'title',
            [styles['date']]: appearance === 'date',
            [styles['input-body']]: appearance === 'tag',
         })}
      />
   );
});

export default Input;
