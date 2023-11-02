const express = require("express");

const app = express();
const PORT = 4000 || process.env.PORT;
app.get("/testmode", (req, res) => {
  res.status(200).send("App is working");
});

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});

module.exports = app;
