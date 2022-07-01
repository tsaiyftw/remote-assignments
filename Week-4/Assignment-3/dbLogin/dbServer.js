const express = require("express");
const app = express();

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


app.get("/sign_up", (req, res) => {
    console.log(req.query);
    const { email, password } = req.query;

    db.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        const sqlInsert = `INSERT INTO user (email, password) VALUES ( "${email}","${password}")`

        db.query(sqlInsert, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });
    });
});

app.get("/sign_in", (req, res) => {
    console.log(req.query);
    const { email, password } = req.query;

    db.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        const sqlselect = `SELECT password FROM user WHERE email= "${email}" `
        console.log(sqlselect);
        db.query(sqlselect, function (err, result) {
            if (err) throw err;
            if (result[0]["password"] == password) {
                console.log("matches!");
            } else {
                console.log("wrong password!", password, result[0]["password"]);
            }
        });
    });
});