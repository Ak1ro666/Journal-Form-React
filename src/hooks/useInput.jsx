import React from 'react';

export default (defaultValue = '') => {
   const [value, setValue] = React.useState(defaultValue);

   return {
      value,
      onChange: (event) => setValue(event.target.value),
   };
};
