import React from 'react';

const useLocalStorage = (key) => {
   const [data, setData] = React.useState();

   React.useEffect(() => {
      const res = JSON.parse(localStorage.getItem(key));
      if (res) {
         setData(res);
      }
   }, []);

   const saveData = (newData) => {
      localStorage.setItem(key, JSON.stringify(newData));
      setData(newData);
   };

   return [data, saveData];
};

export default useLocalStorage;
