const express = require("express");
const app = express();
const port = 3000;

// Create Route
app.get("/", (req, res) => {
  res.send(`<h3>99 bottles of water on the wall</h3>
    <a href ="/98">Take one down, pass it around</a>`);
});

app.get("/:numOfBottles", (req, res) => {
  let bottleNumbers = req.params.numOfBottles;
  if (bottleNumbers > 0) {
    res.send(`<h3>${bottleNumbers} Bottles of water on the wall</h3>
        <a href ="/${bottleNumbers - 1}">Take one down, pass it around</a>`);
  } else {
    res.send(`All out of water! <a href ="/">One more round...</a>`);
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
