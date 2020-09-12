import React, { useEffect, useState } from "react";
import { Flex, Text } from "@chakra-ui/core";
import useStateHook from "./useStateHook";
/*
Hook for Hospital Dashboard Header
*/

const useHospitalHeader = () => {
  const [state, setState] = useState(0);
  const [DropDown, UserState] = useStateHook();
  const Header = (
    <Flex justifyContent="space-between" p={4} backgroundColor="orange.100">
      <Flex>
        <Text
          p={2}
          cursor="pointer"
          onClick={() => setState(0)}
          backgroundColor={state === 0 ? "teal.500" : ""}
        >
          Hospital Beds
        </Text>
        <Text
          p={2}
          cursor="pointer"
          onClick={() => setState(1)}
          backgroundColor={state === 1 ? "teal.500" : ""}
        >
          Medical Colleges
        </Text>
      </Flex>
      <Flex align="center">
        <Text mx={2}>Filter</Text>
        <Flex align="center">
          <Text mx={2}>State</Text> {DropDown}
        </Flex>

        <Text>Type</Text>
      </Flex>
    </Flex>
  );
  return [Header, state, UserState];
};

export default useHospitalHeader;
