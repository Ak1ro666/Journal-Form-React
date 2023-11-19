import React from 'react';

import styles from './SelectUser.module.scss';

import UserContext from '../../context/UserContext';

const SelectUser = () => {
   const { userId, setUserId } = React.useContext(UserContext);

   const changeUser = (e) => {
      setUserId(Number(e.target.value));
   };

   return (
      <>
         <select
            className={styles['select']}
            name="user"
            id="user"
            value={userId}
            onChange={changeUser}>
            <option value="1">Антон</option>
            <option value="2">Вася</option>
         </select>
      </>
   );
};

export default SelectUser;
