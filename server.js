const https = require("https");
const fs = require("fs");
const path = require("path");

const options = {
  key: fs.readFileSync("certs/localhost.key"),
  cert: fs.readFileSync("certs/localhost.crt"),
};

https
  .createServer(options, (req, res) => {
    res.writeHead(200);
    res.end("hello world");
  })
  .listen(443);
