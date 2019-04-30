const express = require("express");
const router = express.Router();

// products 파일의 router get 구현
router.get("/", (req, res) => {
    res.status(200).json({
        message : "GET /Products"
    });
});

module.exports = router;
