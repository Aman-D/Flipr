import React, { useContext, useState } from "react";
import { Text, Flex, Select, Button } from "@chakra-ui/core";

const useStateHook = (list, UserState) => {
  const [state, setState] = useState(UserState);
  const DropDown =
    Object.keys(list).length > 0 ? (
      <Select
        value={state}
        onChange={(e) => setState(e.target.value)}
        color="black"
      >
        {Object.keys(list).map((value, index) => {
          return (
            <option value={value} key={index}>
              {list[value]}
            </option>
          );
        })}
      </Select>
    ) : null;

  return [DropDown, state];
};

export default useStateHook;
