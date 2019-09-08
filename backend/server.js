const http = require('http');
const port = Number(process.env.PORT) || 8080;
const os = require('os');

http.createServer(function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "text/plain");
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, post-check=0, pre-check=0");
  res.setHeader("Connection", "close");
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "Thu, 19 Nov 1981 08:52:00 GMT");
  res.write(`Hello from ${os.hostname()} at ${new Date()}`);
  res.end();
}).listen(port);
