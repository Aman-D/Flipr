import React, { useEffect, useState } from "react";
import { Flex, Text, Grid, Box, Link } from "@chakra-ui/core";
import { NotificationCard, Loading } from "./index";

const Notifications = () => {
  const [links, setLinks] = useState(null);
  /**
   *Fetch the notifications when the components mount
   */
  useEffect(() => {
    const fetchNotification = async () => {
      await fetch("/api/notifications")
        .then((res) => res.json())
        .then((result) => setLinks(result));
    };
    fetchNotification();
  }, []);

  return (
    <Flex direction="column">
      <Grid templateAreas='"n n u " " n n u"'>
        <Box gridArea="n" mx={8}>
          <Text fontSize="lg">Notification</Text>
          <Flex direction="column">
            {links ? (
              links.notifications.map(({ trimTitle, notDate, link }, index) => (
                <NotificationCard
                  title={trimTitle}
                  date={notDate}
                  link={link}
                  key={index}
                />
              ))
            ) : (
              <Loading />
            )}
          </Flex>
        </Box>
        <Box gridArea="u">
          <Text fontSize="lg">Useful Link</Text>
          <Flex direction="column">
            {links ? (
              links.usefulLinks.map(({ trimTitle, link }, index) => (
                <Flex direction="column" key={index} textAlign="left">
                  <Link href={link} target="_blank" m={2}>
                    {trimTitle}
                  </Link>
                </Flex>
              ))
            ) : (
              <Loading />
            )}
          </Flex>
        </Box>
      </Grid>
    </Flex>
  );
};

export default Notifications;
