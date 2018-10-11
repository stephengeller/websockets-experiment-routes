const express = require("express");
const router = express.Router();
const  { check, validationResult } = require('express-validator/check');

router.get("/", function(req, res) {
    res.render("rooms/index");
});

router.post("/main", [
    check('userName').isLength({ min: 4 })
] , (req, res) => {
    const errors = validationResult(req);
    const { userName } = req.body;
    console.log(req.body, userName);

    if (errors.isEmpty()) {
        res.render("rooms/main", {
            userName
        });
    } else {
        res.send("error");
    }


});

module.exports = router;
