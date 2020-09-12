import React from "react";
import { Flex, Text } from "@chakra-ui/core";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const TopBar = () => {
  const { pathname } = useLocation();

  return (
    <Flex justifyContent="space-between" mx={32} mt={18} mb={24}>
      {pathname !== "/" ? (
        <>
          <Text
            as={Link}
            to="/daily-cases"
            backgroundColor={pathname === "/daily-cases" ? "teal.500" : ""}
            p={2}
          >
            Daily Cases
          </Text>
          <Text
            as={Link}
            to="/notifications"
            backgroundColor={pathname === "/notifications" ? "teal.500" : ""}
            p={2}
          >
            Notifications
          </Text>
          <Text
            as={Link}
            to="/hospitals"
            backgroundColor={pathname === "/hospitals" ? "teal.500" : ""}
            p={2}
          >
            Hospital
          </Text>
          <Text
            as={Link}
            to="/helpline"
            backgroundColor={pathname === "/helpline" ? "teal.500" : ""}
            p={2}
          >
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
