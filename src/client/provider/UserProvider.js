import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [UserState, setUserState] = useState("delhi");
  const [hospitalBeds, updateHospitalBeds] = useState({
    regional: [],
    summary: {},
  });
  const [medicalColleges, updateMedicalColleges] = useState([]);
  return (
    <UserContext.Provider
      value={{
        setUserState,
        UserState,
        hospitalBeds,
        updateHospitalBeds,
        medicalColleges,
        updateMedicalColleges,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
