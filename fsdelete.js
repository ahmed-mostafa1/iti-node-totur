const fs = require("fs");
fs.unlink("./new.txt", function (err) {
  if (err) console.log(err);
});
fs.appendFile("./text.txt", "Ahmed");
