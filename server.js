const http = require("http");
const express = require("express");
const app = express();

const PORT = 3000;

const server = http.createServer(app);
server.listen(PORT, "SecondServer",console.log("서버 시작!!!"))
