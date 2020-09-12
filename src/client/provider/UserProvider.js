import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [UserState, setUserState] = useState("delhi");
  const [hospitalBeds, updateHospitalBeds] = useState({
    regional: [],
    summary: {},
  });
  return (
    <UserContext.Provider
      value={{ setUserState, UserState, hospitalBeds, updateHospitalBeds }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
