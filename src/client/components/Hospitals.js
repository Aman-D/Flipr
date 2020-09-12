import React, { useEffect, useState } from "react";
import { Flex, Text } from "@chakra-ui/core";
import { HospitalBeds } from "./index";
import useHospitalHeader from "../hooks/useHospitalHeader";

const Hospitals = () => {
  const [Header, state, UserState] = useHospitalHeader();

  return (
    <Flex flexDir="column" mx={8}>
      {Header}
      {state === 0 && <HospitalBeds state={state} UserState={UserState} />}
    </Flex>
  );
};

export default Hospitals;
