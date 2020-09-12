import React, { useEffect, useState } from "react";
import { Flex, Text } from "@chakra-ui/core";
const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  /**
   *Fetch the notifications when the components mount
   */
  useEffect(() => {
    const fetchNotification = async () => {
      await fetch("/api/notifications")
        .then((res) => res.json())
        .then((notifications) => setNotifications(notifications.notifications));
    };
    fetchNotification();
  }, []);
  console.log(notifications);
  return (
    <Flex direction="column">
      <Text>Notifications</Text>
      <Flex direction="column">
        {notifications &&
          notifications.map(({ title, link }, index) => (
            <Flex key={index}>
              <Text>Title : {title}</Text>
              <br />
              <br />
              <Text>Link: {link}</Text>
              <br />
              <br />
            </Flex>
          ))}
      </Flex>
    </Flex>
  );
};

export default Notifications;
