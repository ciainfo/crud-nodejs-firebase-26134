const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  res.end("Hello World!");
});
server.listen(3000, () => console.log(" http://localhost:3000"));
