const express = require("express");
const mysql = require('mysql');
const cors = require('cors');

const app  = express();
app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    host: "localhost",  
    user: "root",
    password: "",
    database: "signup_login"
})

app.post('/signup', (req, res) =>{
    const sql = "INSERT INTO login_info (`name`,`email`,`password`,`description`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password,
        req.body.title,
        req.body.description,
    ]
    db.query(sql,[values], (err, data) =>{
        if (err){
            return res.json("ERROR");

        }
        return res.json(data);
    })
})

app.post('/create', (req, res) =>{
    const sql = "INSERT INTO login_info (`name`,`email`,`password`,`description`) VALUES (?)";
    const values = [
        req.body.title,
        req.body.description
    ]
    db.query(sql,[values], (err, data) =>{
        if (err){
            return res.json("ERROR");

        }
        return res.json(data);
    })
})

app.post('/login', (req, res) =>{
    const sql = "SELECT * FROM login_info WHERE `email` = ? AND `password` = ?";
    
    db.query(sql,[req.body.email, req.body.password], (err, data) =>{
        if (err){
            return res.json("ERROR");

        }
        // if (data.length > 0){
        //     console.log(data)
        //     return res.json("Success")
        // }
        if (data.length > 0) {
            const values = [
                data.title,
        data.description
            ];
            return res.json(["Success", values]);
        } else {
            return res.json("Fail");
        }
    })
})

app.get("/home", (req,res) =>{
    const sql = "SELECT * FROM login_info";
    db.query(sql, (err, data) =>{
        if(err) return res.json("Error");
        return res.json(data);
    })
})

app.listen(8081, ()=>{
    console.log("listening");
})