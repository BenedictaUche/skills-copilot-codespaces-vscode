// Create web server that can accept any path request and
// return a JSON string in the form of {path: "path"}
// where "path" is the path that was requested

const http = require('http');
const url = require('url');
const port = 3000;

const server = http.createServer((req, res) => {
  const path = url.parse(req.url, true).pathname;
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write(JSON.stringify({path: path}));
  res.end();
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});