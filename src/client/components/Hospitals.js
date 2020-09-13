import React, { useEffect, useState } from "react";
import { Flex, Text } from "@chakra-ui/core";
import { HospitalBeds, MedicalColleges } from "./index";
import useHospitalHeader from "../hooks/useHospitalHeader";

const Hospitals = () => {
  const [Header, state, type] = useHospitalHeader();

  return (
    <Flex flexDir="column" mx={8}>
      {Header}
      {state === 0 ? <HospitalBeds /> : <MedicalColleges type={type} />}
    </Flex>
  );
};

export default Hospitals;
