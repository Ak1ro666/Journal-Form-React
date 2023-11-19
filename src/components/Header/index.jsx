import React from 'react';

import SelectUser from '../SelectUser/SelectUser';
import Button from '../Button';
import Logo from '../Logo/Logo';

const Header = () => {
   const [logoIndex, setLogoIndex] = React.useState(0);

   const toggleLogo = () => {
      setLogoIndex((state) => Number(!state));
   };

   return (
      <>
         <Logo logoIndex={logoIndex} />
         <Button onClick={toggleLogo}>Сменить логотип</Button>
         <SelectUser />
      </>
   );
};

export default Header;
