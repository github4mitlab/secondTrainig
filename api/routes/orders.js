const express = require("express");
const router = express.Router();

// order 파일의 router get 구현
router.get("/", (req, res) => {
   res.status(200).json({
       message : "GET /Orders"
   });
});

module.exports = router;

