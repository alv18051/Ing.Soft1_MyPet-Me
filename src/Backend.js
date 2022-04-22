/**#######################################################################################
 * Universidad del Valle de Guatemala
 * Departamento de Ciencias de la Computación
 * Ingeniería de Software 1 - Sección 10
 * 
 * Me Pet & Me
 * ! Backend
 * 
 * Integrantes:
 * Cristian Laynez
 * Elean Rivas
 * Sara Paguaga
 * Diego Ruiz
 * Javier Alvarez
 #######################################################################################*/

 const express = require('express')
 const app = express()
 const { Client } = require('pg'); // npm install pg
 const bodyParser = require('body-parser')
 const cors = require('cors'); // npm install cors
 
 app.use(bodyParser.json())
 app.use(cors())
 
const db = new Client({
    host: "",
    database: "",
    user: "",
    port: 5432,
    password: "",
    ssl: {
        rejectUnauthorized: false
    }
})
db.connect();

app.get("/testing", (req, res) => {
    console.log("\nPROBANDO ANUNCIOS")

    const sql = `
        SELECT * FROM users;
    `
    console.log(sql)
    db.query(sql, (err, row) => {
        console.log(row.rows)
    })
})

app.post("/add_user", (req, res) => {
    console.log("AGREGAR USER")

    const sql = `
        INSERT INTO users(user_name, email, password, type_user, failed_temps)
        VALUES('${req.body.user_name}', '${req.body.correo}', '${req.body.password}','${req.body.type_user}', 0);
    `
    db.query(sql, (err, row) => {
        (row) ? res.json({success: true}) : res.json({success: false})
    })
})

app.get("/verify", (req, res) => {
    const sql = `
        SELECT email, password FROM users
        WHERE email ILIKE '${req.body.email}' AND password ILIKE ''${req.body.password}
    
    `
})



app.listen(8000, () => {
    console.log('Starting MY PET AND ME in the port 8000')
})
