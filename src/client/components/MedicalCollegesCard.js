import React from "react";
import { Flex, Text, Grid } from "@chakra-ui/core";

const MedicalCollegesCard = ({ array }) => {
  return array && array.length > 0 ? (
    <Flex
      direction="column"
      boxShadow="md"
      borderRadius="md"
      p={4}
      m={4}
      backgroundColor="custom.lightBlue"
    >
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
            backgroundColor={index % 2 === 0 ? "custom.blue1" : "custom.red"}
            p={1}
            color="white"
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
