const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const res = require("express/lib/response");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'))

app.set("view engine", "pug");

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/data", (req, res) => {
    const { number } = req.query;
    if (!number) {
        res.send(`Lack of Parameter`);
    } else {
        // check floating point
        if (number.includes('.')) {
            res.send(`Wrong Parameter (Not a integer)`);
        } else {
            let n = parseInt(number);
            if (isNaN(n)) {
                res.send(`Wrong Parameter (Not a integer)`);
            } else if (n < 0) {
                res.send(`Wrong Parameter (Not a positive number)`);
            } else {
                let sum = n * (n + 1) / 2;
                res.send(`The sum is ${sum}`);
            }
        }
    }
});

app.get("/myName", (req, res) => {
    const { name } = req.cookies;
    if (!name) {
        res.redirect("name.html");
    }
    else {
        res.send(`<h1>Hello ${name}!</h1>`)
    }
});

app.get("/trackName", (req, res) => {
    const { name } = req.query;
    res.cookie("name", name);
    res.send({ name });
});

app.listen(3000, () => {
    console.log("The application is running on localhost:3000!")
});