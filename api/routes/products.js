const express = require('express');
const router = express.Router();
const mongoose = require("mongoose")

const productModel = require('../models/product')

//router.get('/', (req, res) => {
//  res.status(200).json({
//    message: "GET / Products"
//  });
//});

router.get('/', (req, res) => {
  productModel.find()
    .exec()
    .then( docs => {
      console.log(docs);
      res.status(200).json({
        products: docs
      })
    })
    .catch( err => { 
      console.log(err);
      res.status(500).json({
        err1: err
      });
    });
});



//productIdrouter.get('/:productId', (req, res) => {
//  const id = req.params.productId;
//  console.log(id);

//  if( id === "special") {
//    res.status(200).json({
//      message: "Special Product",
//      id : id
//    });
//  } else {
//    res.status(200).json({
//      message: "그냥 아이디"
//    });
//  }
//});

// 데이터 등록
router.post('/', (req, res) => {

  const product = new productModel ({
    _id : new mongoose.Types.ObjectId(), // 이 부분은 DB에서 자동으로 설정
    name : req.body.name,
    price : req.body.price
  });

  product
    .save()
    .then( result => {
      console.log(result);
      res.status(201).json({
        message1: "Success POST",
        createdProduct : result
      });
    })
    .catch( err => {
      console.log(err);
      res.status(500).json({
        error2: err
      });
    });
});

router.put('/',(req, res) => {
  res.status(200).json({
    message: "PUT / Products"
  });
});

router.delete('/', (req, res) => {
  res.status(200).json({
    message: "DELETE / Products"
  });
});


module.exports = router;




/*
// body-parser 통한 products 파일의 router POST 구현
router.post('/', (req, res, next) => {
  const product = {
//      name: req.params.name,
//   price: req.params.price

    // 디비에 넣으려면 body
    name : req.body.name,
    price : req.body.price
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

*/
