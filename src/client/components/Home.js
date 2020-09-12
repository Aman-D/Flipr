import React, { useContext } from "react";
import { Text, Flex, Select, Button } from "@chakra-ui/core";
import stateList from "../statelist.json";
import { UserContext } from "../provider/UserProvider";
import { Link } from "react-router-dom";

const Home = () => {
  const { setUserState, UserState } = useContext(UserContext);

  return (
    <Flex direction="column">
      <Text>Please slect your state for quick results</Text>
      <Select onChange={(e) => setUserState(e.target.value)} value={UserState}>
        {Object.keys(stateList).map((value, index) => {
          const state = stateList[value]
            .split(" ")
            .join("")
            .toLocaleLowerCase();
          return (
            <option value={state} key={index}>
              {stateList[value]}
            </option>
          );
        })}
      </Select>
      <Button variant="solid" w="fit-content">
        <Link to="/daily-cases">Proceed</Link>
      </Button>
    </Flex>
  );
};

export default Home;
