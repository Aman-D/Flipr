import React from "react";
import { Flex, Text, Button, Box, Grid } from "@chakra-ui/core";

const NotificationCard = ({ title, link, date }) => {
  return (
    <Grid
      textAlign="left"
      m={4}
      boxShadow="md"
      p={8}
      templateColumns="2fr 1fr"
      backgroundColor="custom.red"
      color="white"
      borderRadius="md"
    >
      <Box>
        <Text fontSize="lg" fontWeight="medium">
          {title}
        </Text>
        <Button
          as="a"
          href={link}
          target="_blank"
          w="fit-content"
          variant="ghost"
          _hover={{}}
          fontWeight="lighter"
          p={0}
        >
          Download PDF
        </Button>
      </Box>
      <Text fontSize="xs" pl={16}>
        {date}
      </Text>
    </Grid>
  );
};

export default NotificationCard;
