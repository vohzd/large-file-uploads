console.log("API HERE!");

import http from "http";
const server = http.createServer();

server.listen(3000, (req, res) => {
  console.log("NODE SERVER LISTENING");

  res.json("yes");

});



console.log("server running");
