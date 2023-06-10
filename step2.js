const fs = require("fs");
const process = require("process");
const axios = require("axios");

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

// cat(process.argv[2]);

// The cat command - read a file and output it's contents.
//Add a new function, webCat. This should take a URL and, using axios, should read the content of that URL and print it to the console.
// For webCat if needs to be async
async function webCat(url) {
  try {
    let res = await axios.get(url);
    console.log(res.data);
  } catch (error) {
    console.error(`Error fetching ${url}: ${error}`);
    process.exit(1);
  }
}

let path = process.argv[2];

// webCat(process.argv[2]);

//Modify the code that invoked cat so that, based on the command-line args, it decides whether the argument is a file path or a URL and calls either cat or webCat, respectively.
if (path.slice(0, 4) === "http") {
  webCat(path);
} else {
  cat(path);
}
