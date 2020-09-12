import React, { useContext } from "react";
import { Text, Flex, Select, Button } from "@chakra-ui/core";

import { Link } from "react-router-dom";
import useStateHook from "../hooks/useStateHook";

const Home = () => {
  const [DropDown, UserState] = useStateHook();
  return (
    <Flex direction="column">
      <Text>Please slect your state for quick results</Text>
      {DropDown}
      <Button variant="solid" w="fit-content">
        <Link to="/daily-cases">Proceed</Link>
      </Button>
    </Flex>
  );
};

export default Home;
