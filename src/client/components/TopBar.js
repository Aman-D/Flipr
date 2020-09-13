import React from "react";
import { Flex, Text } from "@chakra-ui/core";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const TopBar = () => {
  const { pathname } = useLocation();

  return (
    <Flex
      justifyContent="space-between"
      mx={32}
      p={18}
      mb={24}
      color="white"
      backgroundColor="custom.lightBlue"
      borderRadius="lg"
    >
      {pathname !== "/" ? (
        <>
          <Text
            as={Link}
            to="/daily-cases"
            backgroundColor={pathname === "/daily-cases" ? "custom.blue1" : ""}
            p={2}
            borderRadius="lg"
          >
            Daily Cases
          </Text>
          <Text
            as={Link}
            to="/notifications"
            backgroundColor={
              pathname === "/notifications" ? "custom.blue1" : ""
            }
            p={2}
            borderRadius="lg"
          >
            Notifications
          </Text>
          <Text
            as={Link}
            to="/hospitals"
            backgroundColor={pathname === "/hospitals" ? "custom.blue1" : ""}
            p={2}
            borderRadius="lg"
          >
            Hospital
          </Text>
          <Text
            as={Link}
            to="/helpline"
            backgroundColor={pathname === "/helpline" ? "custom.blue1" : ""}
            p={2}
            borderRadius="lg"
          >
            Contact & Helpline
          </Text>
        </>
      ) : (
        <>Covid19 Dashboard</>
      )}
    </Flex>
  );
};

export default TopBar;
