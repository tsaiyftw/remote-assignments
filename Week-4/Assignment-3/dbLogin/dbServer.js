const express = require("express");
const app = express();
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }))
app.set("view-engine", "ejs")

const mysql = require("mysql2");

require("dotenv").config();

const DB_HOST = process.env.DB_HOST
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_DATABASE = process.env.DB_DATABASE
const DB_PORT = process.env.DB_PORT

const db = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    port: DB_PORT
});

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server Started on port ${port}...`)
});

app.get("/", (req, res) => {
    res.render("index.ejs", { email: req.body.email })
});

app.get("/home", (req, res) => {
    res.render("home.ejs")
});

app.post("/sign_up", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log(req.body);

    db.connect((err) => {
        if (err) throw err;
        console.log("Sign_up Connected!");
        // check if email exist
        const sqlselect = `SELECT * FROM user WHERE email = "${email}"`;
        db.query(sqlselect, [email, password], (err, result) => {
            if (err) throw err;
            // if email not found
            if (result.length == 0) {
                // insert into user table
                const sqlInsert = `INSERT INTO user (email, password) VALUES ("${email}", "${password}")`;
                db.query(sqlInsert, (err, result) => {
                    if (err) throw err;
                    console.log("1 record inserted");
                    res.render("index.ejs", { email: req.body.email })
                });
                // email found: show messesage  "email already exist" on home.ejs
            } else {
                console.log("email already exist!", [email, password]);
            }
        });
    });
});

app.post("/sign_in", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log(req.body);

    db.connect(function (err) {
        if (err) throw err;
        console.log("Sign_in Connected!");
        // check if any matched email, then check if the password is matched
        const sqlselect = `SELECT password FROM user WHERE email= "${email}"`;
        db.query(sqlselect, function (err, result) {
            console.log(sqlselect);
            console.log(result);
            if (err) throw err;
            if (result.length == 0) {
                console.log("No user with that email!");
            } else if (result[0]["password"] == `${password}`) {
                console.log("Password matches!")
                res.render("index.ejs", { email: req.body.email });
            } else {
                console.log("Password not matched! Please provide correct password...");
            };
        });
    });
})