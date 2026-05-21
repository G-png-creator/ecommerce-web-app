const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mysql = require("mysql2");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

/* =========================
   DATABASE CONNECTION
========================= */

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) {
        console.log("Database Connection Failed");
        console.log(err);
    } else {
        console.log("MySQL Connected");
    }
});

/* =========================
   TEST ROUTE
========================= */

app.get("/", (req, res) => {
    res.send("Server Running");
});

/* =========================
   USER REGISTER
========================= */

app.post("/api/users/register", async (req, res) => {

    try {

        const { name, email, password } = req.body;

        // Check User
        const checkSql = "SELECT * FROM users WHERE email=?";

        db.query(checkSql, [email], async (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            if (result.length > 0) {
                return res.status(400).json("User already exists");
            }

            // Hash Password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Insert User
            const sql =
                "INSERT INTO users(name,email,password) VALUES(?,?,?)";

            db.query(
                sql,
                [name, email, hashedPassword],
                (err, result) => {

                    if (err) {
                        return res.status(500).json(err);
                    }

                    res.json("User Registered Successfully");
                }
            );
        });

    } catch (error) {
        res.status(500).json(error);
    }
});

/* =========================
   USER LOGIN
========================= */

app.post("/api/users/login", (req, res) => {

    try {

        const { email, password } = req.body;

        const sql = "SELECT * FROM users WHERE email=?";

        db.query(sql, [email], async (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            if (result.length === 0) {
                return res.status(404).json("User Not Found");
            }

            const user = result[0];

            // Compare Password
            const isMatch = await bcrypt.compare(
                password,
                user.password
            );

            if (!isMatch) {
                return res.status(400).json("Wrong Password");
            }

            // Generate Token
            const token = jwt.sign(
                {
                    id: user.id,
                    role: user.role
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: "1d"
                }
            );

            res.json({
                message: "Login Successful",
                token: token
            });
        });

    } catch (error) {
        res.status(500).json(error);
    }
});

/* =========================
   GET PRODUCTS
========================= */

app.get("/api/products", (req, res) => {

    const sql = "SELECT * FROM products";

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
});

/* =========================
   ADD PRODUCT
========================= */

app.post("/api/products", (req, res) => {

    const { name, price, description, image } = req.body;

    const sql =
        "INSERT INTO products(name,price,description,image) VALUES(?,?,?,?)";

    db.query(
        sql,
        [name, price, description, image],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json("Product Added Successfully");
        }
    );
});

/* =========================
   PLACE ORDER
========================= */

app.post("/api/orders", (req, res) => {

    const { user_id, total } = req.body;

    const sql =
        "INSERT INTO orders(user_id,total) VALUES(?,?)";

    db.query(
        sql,
        [user_id, total],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json("Order Placed Successfully");
        }
    );
});

/* =========================
   GET ORDERS
========================= */

app.get("/api/orders", (req, res) => {

    const sql = "SELECT * FROM orders";

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
});

/* =========================
   SERVER
========================= */

app.listen(5000, () => {
    console.log("Server running on port 5000");
});