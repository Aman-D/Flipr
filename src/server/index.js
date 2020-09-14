const express = require("express");
const app = express();
const cors = require("cors");
const indexRoute = require("./routes/indexRoute");

// database
const db = require("./db/db");

// Body Parser
app.use(express.urlencoded({ limit: "50mb", extended: false }));
app.use(express.json({ limit: "50mb" }));

// Cors
app.use(cors());

// Morgan for Logging
if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}

app.use(express.static("dist"));

// Routes
app.use("/api", indexRoute);

app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
);

module.exports = { database: db };
