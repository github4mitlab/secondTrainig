const http = require("http");
const express = require("express");
const app = express();
const PORT = 3000;

//Start Server
const server = http.createServer(app);
server.listen(PORT, console.log("서버 시작!!!"));

// 하위 라우터들의 정의
const orderRoutes = require("./api/routes/orders");
const productRoutes = require("./api/routes/products");

//라우터 객체 생성
app.use("/orders", orderRoutes);
app.use("/products", productRoutes);


// server 파일의 get 구현
app.get("/", (req, res) => {
    res.status(200).json({
        message : "It's a root!!!"
    });
 });
 