import express from "express";
import cors from "cors";
import morgan from "morgan";

import { getData } from "./mongo.js";

const app = express();
const port = 3000;

// middleware
app.use(express.json());
app.use(cors());
// app.use(morgan('dev'))
morgan.token("status-colored", (req, res) => {
  const status = res.statusCode;
  const color =
    status >= 500 ? 31 // red
      : status >= 400 ? 33 // yellow
      : status >= 300 ? 36 // cyan
      : status >= 200 ? 32 // green
      : 0; // no color
  return `\x1b[${color}m${status}\x1b[0m`
});

app.use(morgan(":remote-addr :method :url :status-colored :response-time ms"));

// define routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

const reverseOrderList = ["education", "experience"];
app.get("/api/:endpoint", (req, res) => {
  const params = req.params;
  getData(
    params.endpoint,
    reverseOrderList.includes(params.endpoint)
  ).then((result) => {
    res.json(result);
  });
});

// start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
