# node js api using express

### express is a framework by which it is easier to create an api

```javascript
const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("hello world!!!");
});
app.listen(3000, () => {
  console.log("listening");
});
```

# Update your api as you save

```javascript
install nodemon
npm i -g nodemon
nodemon app.js
```
