const express = require("express");
const router = express.Router();
const axios = require("axios").default;
const date = require("../helper/date");
/**
 * @description Fetch notifications
 * @route GET https://api.rootnet.in/covid19-in/notifications
 */

router.get("/notifications", async (req, res) => {
  let fetchedData;
  let notifications = [],
    usefulLinks = [];

  await axios
    .get("https://api.rootnet.in/covid19-in/notifications")
    .then(function (response) {
      // handle success
      fetchedData = response.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      res.status(500).send("Internal Server Error");
    });

  // filtering notification and other links
  await fetchedData.data.notifications.map(({ title, link }) => {
    const { notification, notDate, trimTitle, orgDate } = date(title);
    if (notification) {
      notifications.push({ notDate, trimTitle, link, orgDate });
    } else {
      usefulLinks.push({ trimTitle, link });
    }
  });

  //sorting on the basis of date
  notifications.sort(function (a, b) {
    if (a.orgDate < b.orgDate) return 1;
    if (a.orgDate > b.orgDate) return -1;
    return 0;
  });
  res.status(200).json({
    notifications,
    usefulLinks,
  });
});

router.get("/", (req, res) => {
  res.send("hello");
});

module.exports = router;
