const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

//Config file
dotenv.config({ path: "./config/config.env" });

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
app.use("/api", require("./routes/index.js"));

app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
);
