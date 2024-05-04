const fs = require("fs");
fs.writeFile("./new.txt", "Simple ", function (err) {
  if (err) {
    console.log(err);
  }
});

// * appendFile
fs.appendFile("./new.txt", "Simple ", function (err) {
  if (err) {
    console.log(err);
  }
});
