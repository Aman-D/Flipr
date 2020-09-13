import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../provider/UserProvider";
import { MedicalCollegesCard, Loading } from "./index";
import { Flex } from "@chakra-ui/core";

const MedicalColleges = (props) => {
  const [filteredColleges, updateFilteredColleges] = useState({});
  const [type, setType] = useState(props.type);
  const { medicalColleges, updateMedicalColleges, UserState } = useContext(
    UserContext
  );

  /**
   *Fetch the Medical Colleges and store it in user context
   */
  useEffect(() => {
    const fetchNotification = async () => {
      await fetch("/api/medical-colleges")
        .then((res) => res.json())
        .then((result) => updateMedicalColleges(result.medicalColleges));
    };
    if (medicalColleges.length === 0) {
      fetchNotification();
    }
  }, []);

  useEffect(() => {
    setType(props.type);
  }, [props.type]);

  /**
   * Filtering code for colleges on tje basis on state and type
   */
  useEffect(() => {
    let filteredList;
    if (Object.keys(medicalColleges).length > 0) {
      if (UserState === "all" && type === "all") {
        updateFilteredColleges(medicalColleges);
      } else if (UserState === "all" && type !== "all") {
        filteredList = Object.keys(medicalColleges).map((value) => {
          return medicalColleges[value].filter(
            (value) => value.ownership && value.ownership.toLowerCase() === type
          );
        });
        updateFilteredColleges(filteredList);
      } else if (UserState !== "all" && type === "all") {
        updateFilteredColleges({ state: medicalColleges[UserState] });
      } else {
        if (medicalColleges[UserState]) {
          filteredList = medicalColleges[UserState].filter(
            ({ ownership }) => ownership.toLowerCase() === type
          );
        } else {
          updateFilteredColleges({});
        }

        updateFilteredColleges({ state: filteredList });
      }
    }
  }, [UserState, type, medicalColleges]);

  return Object.keys(filteredColleges).length > 0 ? (
    <Flex direction="column">
      {Object.keys(filteredColleges).map((value, index) => (
        <MedicalCollegesCard key={index} array={filteredColleges[value]} />
      ))}
    </Flex>
  ) : (
    <Loading />
  );
};

export default MedicalColleges;
