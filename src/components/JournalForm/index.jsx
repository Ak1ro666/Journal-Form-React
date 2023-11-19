import React, { useEffect, useReducer } from 'react';
import cn from 'classnames';

import styles from './JournalForm.module.scss';

import Button from '../Button';
import svgDate from '../../assets/date.svg';
import svgFolder from '../../assets/folder.svg';
import { INITIAL_STATE, formReducer } from './JournalForm.state';
import Input from '../Input';
import UserContext from '../../context/UserContext';

const JournalForm = ({ addItem, data, onDelete, clearForm }) => {
   const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
   const { isValid, isFormReadyToSubmit, values } = formState;
   const titleRef = React.useRef();
   const dateRef = React.useRef();
   const textRef = React.useRef();
   const tagRef = React.useRef();
   const { userId } = React.useContext(UserContext);

   const focusError = (isValid) => {
      switch (true) {
         case !isValid.title:
            titleRef.current.focus();
            break;
         case !isValid.date:
            dateRef.current.focus();
            break;
         case !isValid.tag:
            tagRef.current.focus();
            break;
         case !isValid.text:
            textRef.current.focus();
            break;
         default:
            break;
      }
   };

   useEffect(() => {
      if (!data) {
         dispatchForm({ type: 'CLEAR' });
         dispatchForm({ type: 'SET_VALUE', payload: { userId } });
      }

      dispatchForm({ type: 'SET_VALUE', payload: { ...data } });
   }, [data]);

   useEffect(() => {
      let timerId;
      if (!isValid.date || !isValid.text || !isValid.date || !isValid.tag) {
         focusError(isValid);
         timerId = setTimeout(() => {
            dispatchForm({ type: 'RESET_VALIDITY' });
         }, 2000);
      }
      return () => {
         clearTimeout(timerId);
      };
   }, [isValid]);

   useEffect(() => {
      if (isFormReadyToSubmit) {
         addItem(values);
         dispatchForm({ type: 'CLEAR' });
         dispatchForm({ type: 'SET_VALUE', payload: { userId } });
      }
   }, [isFormReadyToSubmit, values, userId]);

   const addJournalItem = (event) => {
      event.preventDefault();
      dispatchForm({ type: 'SUBMIT' });
   };

   useEffect(() => {
      dispatchForm({ type: 'SET_VALUE', payload: { userId } });
   }, [userId]);

   const onChange = (e) => {
      dispatchForm({ type: 'SET_VALUE', payload: { [e.target.name]: e.target.value } });
   };

   const deleteJournalItem = (id) => {
      onDelete(id);
      dispatchForm({ type: 'CLEAR' });
      dispatchForm({ type: 'SET_VALUE', payload: { userId } });
      clearForm();
   };

   return (
      <form className={styles.JournalForm} onSubmit={addJournalItem}>
         <div className={styles['form-row']}>
            <Input
               isValid={isValid.title}
               ref={titleRef}
               type="title"
               name="title"
               value={values.title}
               onChange={onChange}
               appearance="title"
            />
            {data?.id && (
               <button
                  onClick={() => deleteJournalItem(data.id)}
                  className={styles['button-remove']}
                  type="button">
                  &times;
               </button>
            )}
         </div>
         <div className={styles['form-row']}>
            <label htmlFor="date" className={styles['input-label']}>
               <div className={styles['container__input-img']}>
                  <img className={styles['input-img']} src={svgDate} alt="Иконка даты" />
               </div>
               <span>Дата</span>
            </label>
            <Input
               isValid={isValid.date}
               ref={dateRef}
               id="date"
               type="date"
               name="date"
               appearance="date"
               onChange={onChange}
               value={values.date ? new Date(values.date).toISOString().slice(0, 10) : ''}
            />
         </div>
         <div className={styles['form-row']}>
            <label htmlFor="folder" className={styles['input-label']}>
               <div className={styles['container__input-img']}>
                  <img className={styles['input-img']} src={svgFolder} alt="Иконка папки" />
               </div>
               <span>Метки</span>
            </label>
            <Input
               isValid={isValid.tag}
               value={values.tag}
               id="folder"
               ref={tagRef}
               appearance="tag"
               name="tag"
               type="text"
               onChange={onChange}
            />
         </div>
         <textarea
            className={cn(styles.textarea, {
               [styles.invalid]: !isValid.text,
            })}
            value={values.text}
            onChange={onChange}
            name="text"
            ref={textRef}
            cols="30"
            rows="10"></textarea>
         <Button>Сохранить</Button>
      </form>
   );
};

export default JournalForm;
