import React, { useContext } from "react";
import { Text, Flex, Select, Button } from "@chakra-ui/core";
import stateList from "../statelist.json";
import { UserContext } from "../provider/UserProvider";

const useStateHook = (state) => {
  const { setUserState, UserState } = useContext(state ? state : UserContext);
  const DropDown = (
    <Select value={UserState} onChange={(e) => setUserState(e.target.value)}>
      {Object.keys(stateList).map((value, index) => {
        const state = stateList[value].split(" ").join("").toLocaleLowerCase();
        return (
          <option value={state} key={index}>
            {stateList[value]}
          </option>
        );
      })}
    </Select>
  );
  return [DropDown, UserState];
};

export default useStateHook;
