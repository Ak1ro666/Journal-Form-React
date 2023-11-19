import React from 'react';
import { memo } from 'react';

import styles from './Logo.module.scss';

const Logo = ({ logoIndex }) => {
   const logos = ['/src/assets/journal.svg', '/src/assets/pinecone.svg'];

   return (
      <>
         <a href="#!">
            <img className={styles.logo} src={logos[logoIndex]} alt="Logo" />
         </a>
      </>
   );
};

export default memo(Logo);
