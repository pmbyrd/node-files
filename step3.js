const fs = require("fs");
const axios = require("axios");
const args = process.argv.slice(2);
let path = args[0];
let out;

function cat(path) {
  fs.readFile(path, "utf8", function (err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    } else {
      console.log(data);
    }
  });
}

async function webCat(url) {
  try {
    let res = await axios.get(url);
    console.log(res.data);
  } catch (error) {
    console.error(`Error fetching ${url}: ${error}`);
    process.exit(1);
  }
}

if (args[0] === "--out") {
  out = args[1];
  path = args[2];
}

if (path.slice(0, 4) === "http") {
  webCat(path, out);
} else {
  cat(path, out);
}
