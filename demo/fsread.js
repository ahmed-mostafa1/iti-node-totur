const fs = require("fs");
let data = fs.readFileSync("./text.txt", "utf-8");

const sum = function (num1, num2) {
  return num1 + num2;
};

module.exports = {
  data: data,
  sum: sum,
};
