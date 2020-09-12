import React from "react";
import { Flex, Text, Grid } from "@chakra-ui/core";
const HospitalBedCard = ({
  state,
  ruralHospitals,
  ruralBeds,
  urbanHospitals,
  urbanBeds,
  totalBeds,
  totalHospitals,
}) => {
  return (
    <Flex direction="column" boxShadow="sm" p={8} minW="380px" m={4}>
      <Text textAlign="center" fontSize="xl">
        {state.toUpperCase()}
      </Text>
      <Grid templateColumns="1fr 1fr">
        <Flex direction="column" m={2}>
          <Text>Rural Beds</Text>
          <Text>{ruralBeds}</Text>
        </Flex>
        <Flex direction="column" m={2}>
          <Text>Rural Hospitals</Text>
          <Text>{ruralHospitals}</Text>
        </Flex>
        <Flex direction="column" m={2}>
          <Text>Urban Beds</Text>
          <Text>{urbanBeds}</Text>
        </Flex>
        <Flex direction="column" m={2}>
          <Text>Urban Hospitals</Text>
          <Text>{urbanHospitals}</Text>
        </Flex>
        <Flex direction="column" m={2}>
          <Text>Total Beds</Text>
          <Text>{totalBeds}</Text>
        </Flex>
        <Flex direction="column" m={2}>
          <Text>Toal Hospitals</Text>
          <Text>{totalHospitals}</Text>
        </Flex>
      </Grid>
    </Flex>
  );
};

export default HospitalBedCard;