const express = require("express");
const router = express.Router();
const axios = require("axios").default;
const date = require("../helper/date");
const medicalColleges = require("../helper/groupColleges");
const db = require("../db/db");
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

/**
 * @description Fetch hospitals
 * @route GET https://api.rootnet.in/covid19-in/hospitals/beds
 */
router.get("/hospitals", async (req, res) => {
  let fetchedData;
  await axios
    .get("https://api.rootnet.in/covid19-in/hospitals/beds")
    .then(function (response) {
      // handle success
      fetchedData = response.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      res.status(500).send("Internal Server Error");
    });

  res.status(200).json({
    summary: fetchedData.data.summary,
    regional: fetchedData.data.regional,
  });
});

/**
 * @description Fetch Medical colleges
 * @route GET https://api.rootnet.in/covid19-in/hospitals/medical-colleges
 */
router.get("/medical-colleges", async (req, res) => {
  let fetchedData;
  await axios
    .get("https://api.rootnet.in/covid19-in/hospitals/medical-colleges")
    .then(function (response) {
      // handle success
      fetchedData = response.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      res.status(500).send("Internal Server Error");
    });
  const modifiedResult = await medicalColleges(
    fetchedData.data.medicalColleges
  );
  res.status(200).json({
    medicalColleges: modifiedResult,
  });
});

/**
 * @description Fetch Contact details
 * @route GET https://api.rootnet.in/covid19-in/contacts
 */
router.get("/contacts", async (req, res) => {
  let fetchedData;
  await axios
    .get("https://api.rootnet.in/covid19-in/contacts")
    .then(function (response) {
      // handle success
      fetchedData = response.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      res.status(500).send("Internal Server Error");
    });

  res.status(200).json({
    data: fetchedData.data.contacts,
  });
});

/**
 * @description Fetch Desceased people
 */
router.get("/desceased", async (req, res) => {
  let sql = "SELECT * from covid19india";
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

module.exports = router;
