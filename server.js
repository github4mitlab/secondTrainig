const http = require("http");
const express = require("express");
const app = express();
const morgan = require("morgan");
const bodypaser = require("body-parser");
const mongoose = require("mongoose");


// 하위 라우터들의 정의
const orderRoutes = require("./api/routes/orders");
const productRoutes = require("./api/routes/products");

//라우터 객체 생성
app.use("/orders", orderRoutes);
app.use("/products", productRoutes);

// 에러처리를 위한 MORGAN 객체 생성, 에러메시지처리 부분 구현
app.use(morgan("dev"));
app.use(bodypaser.json());
app.use(bodypaser.urlencoded({ extended : false }));

//DB 연결
const db = require('./config/key.js').mongoURI;

mongoose.connect(db, { useNewUrlParser : true })
    .then( () => console.log("MongoDB Connected..."))
    .catch( err => console.log(err));


//body를 다루기 위해 body-parser 객체 생성
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});


 // server 파일의 get 구현
 app.get("/", (req, res) => {
     res.status(200).json({
         message : "It's a root!!!"
     });
  });


app.use((req, res, next) => {
    const error = new Error("요청 파일 못차즘");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error1: {
            message: error.message
        }
    });
});

const PORT = 3000;

//Start Server
const server = http.createServer(app);
server.listen(PORT, console.log("서버 시작!!!"));