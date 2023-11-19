import React from 'react';

const UserContext = React.createContext({
   userId: 1,
});

export const UserContextProvider = ({ children }) => {
   const [userId, setUserId] = React.useState(1);

   return <UserContext.Provider value={{ userId, setUserId }}>{children}</UserContext.Provider>;
};

export default UserContext;
