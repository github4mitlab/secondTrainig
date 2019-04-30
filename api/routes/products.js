const express = require("express");
const router = express.Router();

// products 파일의 router get 구현
router.get("/", (req, res) => {
    res.status(200).json({
        message : "GET /Products"
    });
});

 
 // POST router
 router.post("/", (req, res) => {
     res.status(200).json({
         message : "post /Products"
     });
 
 });
 
 // PUT router
 router.put("/", (req, res) => {
     res.status(200).json({
     message : "PUT /Products"
     });
 });
 
 // DELETE router
 router.delete("/", (req, res) => {
     res.status(200).json({
     message : "DELETE /Products"
     });
 });
 
 
 
module.exports = router;
