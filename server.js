const http = require("http");
const express = require("express");
const app = express();
const morgan = require("morgan");

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
 
// 에러처리를 위한 MORGAN 객체 생성, 에러메시지처리 부분 구현
app.use(morgan("dev"));
app.use((req, res, next) => {
    const error = new Error("요청 파일 못차즘");
    error.status = 404;
    next(error);
});
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

