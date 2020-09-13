import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../provider/UserProvider";
import { Box, Flex, Grid, Text } from "@chakra-ui/core";
import Loading from "./Loading";
import { HospitalBedCard } from "./index";
import useStateHook from "../hooks/useStateHook";

const HospitalBeds = ({ state }) => {
  const [beds, setBeds] = useState([]);
  const { hospitalBeds, updateHospitalBeds, UserState } = useContext(
    UserContext
  );

  /**
   *Fetch the Hospital beds and store it in user context
   */
  useEffect(() => {
    const fetchNotification = async () => {
      await fetch("/api/hospitals")
        .then((res) => res.json())
        .then((result) => updateHospitalBeds(result));
    };
    if (hospitalBeds.regional.length === 0) {
      fetchNotification();
    }
  }, []);

  useEffect(() => {
    if (UserState === "all") {
      setBeds(hospitalBeds.regional);
    } else {
      setBeds(
        hospitalBeds.regional.filter(
          (value) => value.state.split(" ").join("").toLowerCase() === UserState
        )
      );
    }
  }, [hospitalBeds, UserState]);

  return hospitalBeds.regional.length > 0 ? (
    <Flex direction="column">
      <Flex justifyContent="center" flexWrap="wrap">
        {Object.keys(hospitalBeds.summary).map((value, index) => (
          <Box
            key={index}
            backgroundColor="custom.red"
            color="white"
            m={4}
            boxShadow="md"
            p={4}
            borderRadius="md"
          >
            <Text>{value}</Text>
            <Text>{hospitalBeds.summary[value]}</Text>
          </Box>
        ))}
      </Flex>
      <Flex flexWrap="wrap">
        {beds.length > 0 &&
          beds.map((beds, index) => <HospitalBedCard key={index} {...beds} />)}
      </Flex>
    </Flex>
  ) : (
    <Loading />
  );
};

export default HospitalBeds;
