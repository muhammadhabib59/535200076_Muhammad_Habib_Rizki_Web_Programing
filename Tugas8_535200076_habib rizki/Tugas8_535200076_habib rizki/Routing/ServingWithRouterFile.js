const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  router = require("./Router"),
  fs = require("fs"),
  plainTextContentType = {
    "Content-Type": "text/plain",
  },
  htmlContentType = {
    "Content-Type": "text/html",
  },
  customReadFile = (file, res) => {
    fs.readFile(`./${file}`, (error, data) => {
      if (error) {
        console.log("Error reading the file...");
      }
      res.end();
    });
  };

router.get("/", (req, res) => {
  res.writeHead(200, plainTextContentType);
  res.end("INDEX");
});
router.get("/index.html", (req, res) => {
  res.writeHead(200, plainTextContentType);
  customReadFile("views/index.html", res);
});
router.post("/", (req, res) => {
  res.writeHead(200, plainTextContentType);
  res.end("POSTED");
});

const getViewUrl = (url) => {
  return `views${url}.html`;
};

http.createServer(router.handle).listen(3000);
console.log(`The server has started and is listening on port number: ${port}`);