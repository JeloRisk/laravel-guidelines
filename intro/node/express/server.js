/** @format */

const http = require("http");

// create server
// callback
const server = http.createServer((req, res) => {
  // Get url
  const url = req.url;
  // Set the response header
  res.setHeader("Content-Type", "text/html");
  //   Define Route
  if (url === "/") {
    res.statusCode = 200;
    res.end("<h1>Home Page</h1><p>Welcome to the home page!</p>");
  } else if (url === "/about") {
    res.statusCode = 200;
    res.end("<h1>About Page</h1><p>Welcome to the about page!</p>");
  } else if (url === "/contact") {
    res.statusCode = 200;
    res.end("<h1>Contact Page</h1><p>Welcome to the contact page!</p>");
  } else {
    res.statusCode = 404;
    res.end("<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>");
  }
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
