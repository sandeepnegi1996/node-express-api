const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/api/getlatest", (req, res) => {
  res.send([
    { deviceId: 1, temperature: 23 },
    { deviceId: 2 },
    { deviceId: 3 }
  ]);
  //inside the send we are returning an array of objects
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
