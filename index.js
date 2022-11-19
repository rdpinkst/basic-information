const http = require("http");
const path = require("path");
const fs = require("fs");


const server = http.createServer((req, res) => {
  
  const filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : `${req.url}.html`
  );

  fs.readFile(filePath, (err, content) => {
    if (err) throw err;
    console.log(err)
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(content, "utf-8");


  });
});

const PORT = process.env.PORT || 8080;

server.listen(PORT);
