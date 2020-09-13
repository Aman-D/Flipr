import React from "react";
import { Flex, Text, Grid } from "@chakra-ui/core";

const MedicalCollegesCard = ({ array }) => {
  return array && array.length > 0 ? (
    <Flex direction="column" boxShadow="sm" p={4} m={4}>
      <Text fontSize="xl" fontWeight="bolder" textAlign="center" p={2}>
        {array[0].state}
      </Text>
      <Grid
        templateColumns="1fr 3fr 1fr 1fr 1fr"
        textAlign="left"
        backgroundColor="gray.50"
        p={2}
      >
        <Text>City</Text>
        <Text>Name</Text>
        <Text>Ownership</Text>
        <Text>Capacity</Text>
        <Text>Hospital Beds</Text>
      </Grid>
      {array.map(
        ({ city, name, ownership, admissionCapacity, hospitalBeds }, index) => (
          <Grid
            templateColumns="1fr 3fr 1fr 1fr 1fr"
            key={index}
            my={2}
            textAlign="left"
            backgroundColor={index % 2 === 0 ? "blue.100" : "pink.100"}
          >
            <Text>{city}</Text>
            <Text>{name}</Text>
            <Text>{ownership}</Text>
            <Text>{admissionCapacity}</Text>
            <Text>{hospitalBeds}</Text>
          </Grid>
        )
      )}
    </Flex>
  ) : (
    <Text>No data available for this state</Text>
  );
};

export default MedicalCollegesCard;
