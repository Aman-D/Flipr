import React, { useContext, useState, useEffect } from "react";
import { Text, Flex, Select, Button } from "@chakra-ui/core";
import stateList from "../statelist.json";
import { Link } from "react-router-dom";
import useStateHook from "../hooks/useStateHook";
import { UserContext } from "../provider/UserProvider";
const Home = () => {
  const { UserState, setUserState } = useContext(UserContext);
  const [list, setList] = useState({});
  const [DropDown, DUserState] = useStateHook(list, UserState);
  /*
  Modifying the state list
  */
  useEffect(() => {
    let newList = {};

    Object.keys(stateList).map(
      (value) =>
        (newList[stateList[value].split(" ").join("").toLocaleLowerCase()] =
          stateList[value])
    );
    setList(newList);
  }, [stateList]);

  /*
  Updating the selected state in the global user context
  */
  useEffect(() => {
    setUserState(DUserState);
  }, [DUserState]);
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
