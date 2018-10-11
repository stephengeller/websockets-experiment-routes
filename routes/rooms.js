const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
    res.render("rooms/index");
});

router.post("/join", function(req, res) {
    console.log(req.body);
    res.send("rooms/join");
});

module.exports = router;
