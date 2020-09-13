import React, { useEffect, useContext } from "react";
import { Flex, Text } from "@chakra-ui/core";
import { UserContext } from "../provider/UserProvider";

const Contact = () => {
  const {
    contacts,
    updateContacts,
    primaryContact,
    updatePrimaryContact,
  } = useContext(UserContext);
  /**
   *Fetch the Contacts
   */
  useEffect(() => {
    const fetchNotification = async () => {
      await fetch("/api/contacts")
        .then((res) => res.json())
        .then((result) => {
          updateContacts(result.data.regional);
          updatePrimaryContact(result.data.primaryContact);
        });
    };
    if (contacts.length === 0) {
      fetchNotification();
    }
  }, []);

  return (
    <Flex flexWrap="wrap" mx={4}>
      {contacts.map(({ loc, number }, index) => (
        <Flex
          direction="column"
          key={index}
          m={4}
          boxShadow="sm"
          minW="180px"
          flexGrow="1"
          p={4}
        >
          <Text>{loc}</Text>
          <Text>{number}</Text>
        </Flex>
      ))}
    </Flex>
  );
};

export default Contact;
