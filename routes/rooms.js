const express = require("express");
const router = express.Router();
const  { check, validationResult } = require('express-validator/check');

router.get("/", (req, res) => {
    renderUserAndRoom(res, 'rooms/index')
});

router.post("/main", [
    check('userName').isLength({ min: 4 }),
    check('roomName').isLength({ min: 4 })
] , (req, res) => {

    const validationErrors = validationResult(req);
    const { userName, roomName } = req.body;

    if (validationErrors.isEmpty()) {
        renderUserAndRoom(res, 'rooms/main', userName, roomName)
    } else {
        const errors = validationErrors.array();
        console.log(errors);
        renderUserAndRoom(res, 'rooms/index', userName, '', errors)
    }
});

router.get("/main", (req, res) => {
    res.redirect('/rooms', 200)
});

const renderUserAndRoom = (res, view, user, room, errorJSON) => {
    let userName = typeof  user !== "undefined" ? user : "";
    let roomName = typeof  room !== "undefined" ? room : "";
    let errors = typeof  errorJSON !== "undefined" ? errorJSON : "";

    return res.render(view, {
        userName,
        roomName,
        errors
    })
};

module.exports = router;
