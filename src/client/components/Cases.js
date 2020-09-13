import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../provider/UserProvider";
import { Flex, Grid, Input, Text } from "@chakra-ui/core";
import { Graph } from "../components/index";
import useStateHook from "../hooks/useStateHook";
import stateList from "../statelist.json";
import ageList from "../ageList.json";
import genderList from "../gender.json";
import statusList from "../status.json";

const Cases = () => {
  const { UserState, setUserState, people, updatePeople } = useContext(
    UserContext
  );
  const [list, setList] = useState({});
  const [StateDropDown, DUserState] = useStateHook(list, UserState);
  const [AgeDropDown, age] = useStateHook(ageList, "40-49");
  const [GenderDropDown, Gender] = useStateHook(genderList, "male");
  const [StatusDropDown, Status] = useStateHook(statusList, "recovered");
  const [filteredPerson, updateFilteredPerson] = useState([]);
  const [fromDate, setFromDate] = useState("2020-01-01");
  const [toDate, setToDate] = useState("2020-04-01");

  useEffect(() => {
    const fetchNotification = async () => {
      await fetch("/api/desceased")
        .then((res) => res.json())
        .then((result) => updatePeople(result));
    };
    if (people.length === 0) {
      fetchNotification();
    }
  }, []);

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
  Code for filtering the person
  */
  useEffect(() => {
    let filter;

    if (people.length > 0) {
      filter = people.filter(
        ({ state, gender, reportedOn, status, ageEstimate }) => {
          let date = reportedOn.split("/");
          date = `${date[2]}-${date[1]}-${date[0]}`;
          let Age = age.split("-");
          if (
            Gender === gender &&
            (UserState !== "all"
              ? state.split(" ").join("").toLowerCase() === UserState
              : true) &&
            status.toLowerCase() === Status &&
            parseInt(ageEstimate) >= parseInt(Age[0]) &&
            parseInt(ageEstimate) <= parseInt(Age[1]) &&
            new Date(date) >= new Date(fromDate) &&
            new Date(date) <= new Date(toDate)
          )
            return true;
          else return false;
        }
      );
      console.log(filter);
      updateFilteredPerson(filter);
    }
  }, [UserState, fromDate, toDate, age, Gender, Status, people]);

  /*
  Updating the selected state in the global user context
  */
  useEffect(() => {
    setUserState(DUserState);
  }, [DUserState]);

  /*
  FIlter the record
  */

  return (
    <Grid templateColumns="3fr 1fr">
      <Flex>{<Graph />}</Flex>
      <Flex
        direction="column"
        backgroundColor="custom.blue2"
        color="white"
        p={4}
      >
        <Text p={4} textAlign="left" fontSize="lg">
          State
        </Text>
        {StateDropDown}
        <Text p={4} textAlign="left" fontSize="lg">
          Age
        </Text>
        {AgeDropDown}
        <Text p={4} textAlign="left" fontSize="lg">
          Gender
        </Text>
        {GenderDropDown}
        <Text p={4} textAlign="left" fontSize="lg">
          From
        </Text>
        <Input
          type="date"
          id="fromDate"
          onChange={(e) => setFromDate(e.target.value)}
          max="2020-04-30"
          value={fromDate}
          color="black"
        />
        <Text p={4} textAlign="left" fontSize="lg">
          To
        </Text>
        <Input
          type="date"
          id="toDate"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
          max="2020-04-30"
          value={toDate}
          color="black"
        />
        <Text p={4} textAlign="left" fontSize="lg">
          Status
        </Text>
        {StatusDropDown}
      </Flex>
    </Grid>
  );
};

export default Cases;
