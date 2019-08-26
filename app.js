const express = require("express");
const app = express();

//i will create an array which will be having all the information
//this array basically resembles what is the type of information which is stored
// inside the dynamo db by the devices
//we will made two get request basically two endpoint
//one will show all the nodes
// other will show the specific node

const data = [
  {
    DeviceId: "nodedevice1",
    temperature: 23,
    FFTX1: 0.2,
    FFTX2: 0.3,
    FFTY1: 0.2,
    FFTY2: 0.3
  },
  {
    DeviceId: "nodedevice2",
    temperature: 25,
    FFTX1: 0.6,
    FFTX2: 0.7,
    FFTY1: 0.5,
    FFTY2: 0.7
  }
];

app.get("/", (req, res) => {
  res.send("hello world!!! after nodemon");
});

app.get("/api/getallnodes", (req, res) => {
  res.send(data);
});
//========================================================================================================
//================================THIS IS IMPORTANT ENDPOINT=============================================
//endpoint for the particular node
app.get("/api/getnodebyid/:nodeid", (req, res) => {
  const valuepassed = req.params.nodeid;
  //console.log(valuepassed);
  //console.log(typeof valuepassed);
  const node = data.find(c => c.DeviceId === req.params.nodeid);

  if (!node) {
    res.status(404).send("node with given name is not there");
  }
  res.send(node);
});

//============================================END==================================================================
//=================================================================================================================
app.get("/api/getnodebydate/:year/:month", (req, res) => {
  res.send(req.params.year + " " + req.params.month);
});

app.get("/api/getnodebydatesort/:year/:month", (req, res) => {
  res.send(req.query);
});

// app.get("/api/getlatest", (req, res) => {
//   res.send([
//     { deviceId: 1, temperature: 23 },
//     { deviceId: 2 },
//     { deviceId: 3 }
//   ]);
//   //inside the send we are returning an array of objects
// });

// app.get("/api/getdevice/:deviceId", (req, res) => {
//   res.send(req.params.deviceId);
// });

// app.get("/api/getdevicename/:devicename", (req, res) => {
//   res.send(req.params.devicename);
// });

//for port it should take from the environment varibales we have set it to 5000

const port = process.env.PORT || 3000;

// || pipe is used so that if no value is assigned for the port it will take it as 4000

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
