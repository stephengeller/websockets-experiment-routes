const express = require("express");
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const index = require("./routes/index");
const rooms = require("./routes/rooms");
const session = require("express-session");

const app = express();

app.set("views", __dirname + "/views/", __dirname + "/views/blog");
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", index);
app.use("/rooms", rooms);

app.use(function(req, res, next) {
	const err = new Error("Not Found");
	err.status = 404;
	next(err);
});

app.use(function(err, req, res) {
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};
	res.status(err.status || 500);
	res.render("error");
});

module.exports = app;
