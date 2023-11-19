import React from 'react';
import styles from './JournalItem.module.scss';

const JournalItem = ({ title, date, text }) => {
   const formattedDate = new Date(date).toLocaleDateString();

   return (
      <>
         <h2 className={styles.title}>{title}</h2>
         <h2 className={styles.body}>
            <div className={styles.date}>{formattedDate}</div>
            <div className={styles.text}>{text}</div>
         </h2>
      </>
   );
};

export default JournalItem;
