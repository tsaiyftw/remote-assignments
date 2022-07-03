const express = require("express");
const app = express();
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }))
app.set("view-engine", "ejs")
app.use(express.static('public'))

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

app.get('/member', (req, res) => {
    res.render("member.ejs")
});

app.post('/sign_up', (req, res) => {
    const { email, password } = req.body;
    db.connect((err) => {
        if (err) throw err;
        // check if email exist
        const sqlselect = `SELECT * FROM user WHERE email = "${email}"`;
        db.query(sqlselect, (err, result) => {
            if (err) throw err;
            // if email not found
            if (result.length == 0) {
                // insert into user table
                const sqlInsert = `INSERT INTO user (email, password) VALUES ("${email}", "${password}")`;
                db.query(sqlInsert, (err, result) => {
                    if (err) throw err;
                    res.send("Email successfully registers");
                    return;
                });
            } else {
                res.send("Email address has already been registered. Please sign in or use other email");
            }
        });
    });
});

app.post('/sign_in', (req, res) => {
    const { email, password } = req.body;
    const getPassword = `SELECT password FROM user WHERE email="${email}"`;
    db.query(getPassword, (err, result) => {
        if (err) { throw err; }
        // check if registered already or not
        if (result.length == 0) {
            res.send("No user with the email address was found");
            return;
        };
        const passwordFromDB = result[0].password;
        if (password == passwordFromDB) {
            res.send("Login successfully");
        } else {
            res.send("Password not matched! Please provide correct password");
        };
    });
});
