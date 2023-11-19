import React from 'react';

import styles from './RightPanel.module.scss';

import svg from '../../assets/note.svg';

const RightPanel = () => {
   return (
      <div className={styles.rightPanel}>
         <div className={styles.topSide}>
            <h1>Поход в горы</h1>
            <div className={styles.note}>
							<img src={svg} alt="note" />
						</div>
         </div>
				 
      </div>
   );
};

export default RightPanel;
