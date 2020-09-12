import React from "react";
import { Flex, Text } from "@chakra-ui/core";
import { Link } from "react-router-dom";
const TopBar = () => {
  return (
    <Flex>
      <Text as={Link} to="/daily-cases">
        Daily Cases
      </Text>
      <Text as={Link} to="/notifications">
        Notifications
      </Text>
      <Text as={Link} to="/hospitals">
        Hospital
      </Text>
      <Text as={Link} to="/helpline">
        Contect & Helpline
      </Text>
    </Flex>
  );
};

export default TopBar;
