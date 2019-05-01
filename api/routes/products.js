const express = require('express');
const router = express.Router();

// products 파일의 router get 구현
router.get('/', (req, res) => {
  res.status(200).json({
    message: "GET /Products"
  });
});

// body-parser 통한 products 파일의 router POST 구현
router.post('/', (req, res) => {
  const product = {
    // 단순 입력 데이터 출력이라면 당연히 params(파라메터)로
    name: req.params.name,
    price: req.params.price

    // 디비에 넣으려면 body
    // name : req.body.name,
    // price : req.body.price
  };
  
  res.status(200).json({
    // message : "POST OK"    
    message : product
  });
});

// PUT router
router.put('/', (req, res) => {
  res.status(200).json({
    message: "PUT /Products"
  });
});

// DELETE router
router.delete('/', (req, res) => {
  res.status(200).json({
    message: "DELETE /Products"
  });
});

module.exports = router;
