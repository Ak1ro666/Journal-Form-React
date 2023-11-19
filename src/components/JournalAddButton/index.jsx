// JournalAddButton.jsx
import React from 'react';
import CardButton from '../CardButton';
import './JournalAddButton.scss';

const JournalAddButton = ({ clearForm }) => {
   return (
      <CardButton className="journalAdd" onClick={clearForm}>
         <svg
            style={{ color: 'white' }}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-plus"
            viewBox="0 0 16 16">
            <path
               d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
               fill="white"></path>
         </svg>
         Новое воспоминание
      </CardButton>
   );
};

export default JournalAddButton;
