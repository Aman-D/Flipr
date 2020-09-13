import React, { useEffect, useState, useContext } from "react";
import { Flex, Text } from "@chakra-ui/core";
import useStateHook from "./useStateHook";
import stateList from "../statelist.json";
import ownershipType from "../ownershipType.json";
import { UserContext } from "../provider/UserProvider";
/*
Hook for Hospital Dashboard Header
*/

const useHospitalHeader = () => {
  const [state, setState] = useState(0);
  const [list, setList] = useState({});
  const { UserState, setUserState } = useContext(UserContext);
  const [StateDropDown, DUserState] = useStateHook(
    list,
    UserState,
    setUserState
  );
  const [typeDropDown, type] = useStateHook(ownershipType, "all");

  /*
  Modifying the state list
  */
  useEffect(() => {
    let newList = {};

    Object.keys(stateList).map(
      (value) =>
        (newList[stateList[value].split(" ").join("").toLocaleLowerCase()] =
          stateList[value])
    );
    setList(newList);
  }, [stateList]);

  /*
  Updating the selected state in the global user context
  */
  useEffect(() => {
    setUserState(DUserState);
  }, [DUserState]);

  const Header = (
    <Flex
      justifyContent="space-between"
      p={4}
      backgroundColor="custom.blue2"
      color="white"
      borderRadius="md"
    >
      <Flex>
        <Text
          p={2}
          cursor="pointer"
          onClick={() => setState(0)}
          backgroundColor={state === 0 ? "custom.blue1" : ""}
          borderRadius="md"
        >
          Hospital Beds
        </Text>
        <Text
          p={2}
          cursor="pointer"
          onClick={() => setState(1)}
          backgroundColor={state === 1 ? "custom.blue1" : ""}
          borderRadius="md"
        >
          Medical Colleges
        </Text>
      </Flex>
      <Flex align="center">
        <Text mx={2}>Filter</Text>
        <Flex align="center">
          <Text mx={2}>State</Text> {StateDropDown}
        </Flex>
        {state === 1 && (
          <Flex align="center">
            <Text mx={2}>Type</Text> {typeDropDown}
          </Flex>
        )}
      </Flex>
    </Flex>
  );
  return [Header, state, type];
};

export default useHospitalHeader;
