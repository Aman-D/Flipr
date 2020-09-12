const express = require("express");
const router = express.Router();
const axios = require("axios").default;

/**
 * @description Fetch notifications
 * @route GET https://api.rootnet.in/covid19-in/notifications
 */

router.get("/notifications", async (req, res) => {
  let fetchedData;
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

  res.status(200).json(fetchedData.data);
});

router.get("/", (req, res) => {
  res.send("hello");
});

module.exports = router;
