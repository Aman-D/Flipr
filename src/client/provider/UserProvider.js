import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [UserState, setUserState] = useState("delhi");

  return (
    <UserContext.Provider value={{ setUserState, UserState }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
