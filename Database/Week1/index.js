const mysql = require('mysql2');
const express = require('express');
const app = express()

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    database: 'new_world',
});
db.connect(err => {
    if (err) throw err;
    console.log('mysql connected');
});
app.get('/1', (req, res) => {
    let sql = ' SELECT name FROM city WHERE population BETWEEN 500000 AND 1000000; ';
    let query = db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});
app.get('/2', (req, res) => {
    let sql = "SELECT name FROM city WHERE name LIKE '%land'";
    let query = db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});
app.get('/3', (req, res) => {
    let sql = "SELECT name FROM city  WHERE population BETWEEN 500000 AND 1000000";
    let query = db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});
app.get('/4', (req, res) => {
    let sql = "SELECT name FROM country WHERE continent LIKE '%Europe'";
    let query = db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});
app.get('/5', (req, res) => {
    let sql = "SELECT name FROM country  ORDER BY surfaceArea DESC";
    let query = db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});
app.get('/6', (req, res) => {
    let sql = "SELECT city.name  FROM city    INNER JOIN    country  ON city.countrycode = country.code where country.name ='Netherlands' ";
    let query = db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});
app.get('/7', (req, res) => {
    let sql = "SELECT population FROM city WHERE name = 'Rotterdam';";
    let query = db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});
app.get('/8', (req, res) => {
    let sql = "SELECT name, MAX(surfacearea) FROM country GROUP BY name ORDER BY MAX(surfacearea)DESC  LIMIT 1,10";
    let query = db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});
app.get('/9', (req, res) => {
    let sql = "SELECT name, MAX(population) FROM city GROUP BY name ORDER BY MAX(population)DESC  LIMIT 1,10";
    let query = db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});
app.get('/10', (req, res) => {
    let sql = "SELECT SUM(population)  FROM city";
    let query = db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});
app.listen('3300', () => {
    console.log('Server started on port 3300');
});