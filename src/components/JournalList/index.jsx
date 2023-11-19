import React from 'react';
import styles from './JournalList.module.scss';

import JournalItem from '../JournalItem';
import CardButton from '../CardButton';
import UserContext from '../../context/UserContext';

const JournalList = ({ items, setItem }) => {
   const { userId } = React.useContext(UserContext);

   const sortItems = (a, b) => {
      if (a.date < b.date) {
         return 1;
      } else {
         return -1;
      }
   };

   const filteredItems = React.useMemo(() =>
      items.filter((el) => el.userId === userId).sort(sortItems),
   );

   if (items.length === 0) {
      return <p>Записей пока нету, создайте новые.</p>;
   }

   return (
      <div className={styles.journalList}>
         <ul className={styles.journalList}>
            {filteredItems.map((item) => (
               <li key={item.id}>
                  <CardButton onClick={() => setItem(item)}>
                     <JournalItem title={item.title} date={item.date} text={item.text} />
                  </CardButton>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default JournalList;
