const bodyParser = require("body-parser");
const express = require("express");
const app = express();
app.use(bodyParser.json());

app.post("/linknewnewnew", (req, res) => {
  var please = "";
  var { link } = req.body;
  youtubedl.getInfo(
    link,
    ["-x", "--audio-format", "mp3"],
    function (err, info) {
      if (err) throw err;
      please = info.formats[0].url;
      console.log(please);
    }
  );
});

app.listen(3030, () => {
  console.log(333333);
});
