import React from "react";
import { Flex, Text } from "@chakra-ui/core";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const TopBar = () => {
  const { pathname } = useLocation();

  return (
    <Flex>
      {pathname !== "/" ? (
        <>
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
        </>
      ) : (
        <>Covid19 Dashboard</>
      )}
    </Flex>
  );
};

export default TopBar;
