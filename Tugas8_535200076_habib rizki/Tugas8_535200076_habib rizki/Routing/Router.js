const httpStatus = require("http-status-codes"),
  htmlContentType = {
    "Content-Type": "text/html",
  },
  routes = {
    GET: {
      "/info": (req, res) => {
        res.writeHead(200, {
          "Content-Type": "text/plain",
        });
        res.end("Welcome to the info page");
      },
    },
    POST: {},
  };

exports.handle = (req, res) => {
  try {
    if (routes[req.method][req.url]) {
      routes[req.method][req.url](req, res);
    } else {
      res.writeHead(404, htmlContentType);
      res.end("<h1>No such file exists</h1>");
    }
  } catch (ex) {
    console.log("error: " + ex);
  }
};

exports.get = (url, action) => {
  routes["GET"][url] = action;
};
exports.post = (url, action) => {
  routes["POST"][url] = action;
};