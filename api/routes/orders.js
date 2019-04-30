const express = require("express");
const router = express.Router();

// order 파일의 router get 구현
router.get("/", (req, res) => {
   res.status(200).json({
       message : "GET /Orders"
   });
});

// POST router
router.post("/", (req, res) => {
    res.status(200).json({
        message : "post /Orders"
    });

});

// PUT router
router.put("/", (req, res) => {
    res.status(200).json({
    message : "PUT /Orders"
    });
});

// DELETE router
router.delete("/", (req, res) => {
    res.status(200).json({
    message : "DELETE /Orders"
    });
});


module.exports = router;

