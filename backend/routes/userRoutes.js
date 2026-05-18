const express = require("express");
const bcrypt = require("bcrypt");
const db = require("../db");

const router = express.Router();

router.post("/register", async (req, res) => {

    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = "INSERT INTO users(name,email,password) VALUES(?,?,?)";

    db.query(sql, [name, email, hashedPassword], (err, result) => {

        if(err){
            return res.status(500).json(err);
        }

        res.json("User Registered");
    });
});

module.exports = router;