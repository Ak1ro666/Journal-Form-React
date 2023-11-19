import React from 'react';
import { UserContextProvider } from './context/UserContext';

import './styles/reset.scss';
import './styles/animation.scss';
import './styles/index.scss';

import LeftPanel from './layouts/LeftPanel';
import Body from './layouts/Body';
import Header from './components/Header';
import JournalAddButton from './components/JournalAddButton';
import JournalForm from './components/JournalForm';
import JournalList from './components/JournalList';
import useLocalStorage from './hooks/useLocalStorage';

function mapItems(items) {
   if (!items) {
      return [];
   }

   return items.map((item) => ({
      ...item,
      date: new Date(item.date),
   }));
}

const App = () => {
   const [items, setItems] = useLocalStorage('data');
   const [selectedItem, setSelectedItem] = React.useState(null);

   const addItem = (item) => {
      if (!item.id) {
         setItems([
            ...mapItems(items),
            {
               ...item,
               date: item.date,
               id: items?.length > 0 ? Math.max(...items.map((i) => i.id)) + 1 : 1,
            },
         ]);
      } else {
         setItems([
            ...mapItems(items).map((i) => {
               if (i.id === item.id) {
                  return {
                     ...item,
                  };
               }
               return i;
            }),
         ]);
      }
   };

   const deleteItem = (id) => {
      setItems([...items.filter((el) => el.id !== id)])
   };

   return (
      <UserContextProvider>
         <div className="App">
            <LeftPanel>
               <Header />
               <JournalAddButton clearForm={() => setSelectedItem(null)} />
               <JournalList items={mapItems(items)} setItem={setSelectedItem} />
            </LeftPanel>
            <Body>
               <JournalForm
                  clearForm={() => setSelectedItem(null)}
                  onDelete={deleteItem}
                  addItem={addItem}
                  data={selectedItem}
               />
            </Body>
         </div>
      </UserContextProvider>
   );
};

export default App;
