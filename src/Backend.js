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
    host: "localhost",
    database: "localmypet_and_me",
    user: "postgres",
    port: 5432,
    password: "12345",
    ssl: {
        rejectUnauthorized: false
    }
})
db.connect();

app.get("/testing", (req, res) => {
    console.log("\nPROBANDO ANUNCIOS")

    const sql = `
        SELECT * FROM query_user;
    `
    console.log(sql)
    db.query(sql, (err, row) => {
        console.log(row.rows)
    })
})


app.listen(8000, () => {
    console.log('Starting MY PET AND ME in the port 8000')
})
