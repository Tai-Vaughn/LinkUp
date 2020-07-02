//https://dev.to/saulojoab/how-to-get-data-from-an-mysql-database-in-react-native-53a4
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createPool({
    host: 'localhost', // Your connection adress (localhost).
    user: 'root',     // Your database's username.
    password: '',        // Your database's password.
    database: 'my_db'   // Your database's name.
});

// Starting our app.
const app = express();

// Creating a GET route that returns data from the 'users' table.
app.get('/users', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {

        // Executing the MySQL query (select all data from the 'users' table).
        connection.query('SELECT * FROM users', function (error, results, fields) {
            // If some error occurs, we throw an error.
            if (error) throw error;

            // Getting the 'response' from the database and sending it to our route. This is were the data is.
            res.send(results)
        });
    });
});

// Starting our server.
app.listen(3000, () => {
    console.log('Go to http://localhost:3000/users so you can see the data.');
});

//To get data on react native app, we use fetch and take from PC's IP
test(){
    fetch('http://yourPCip:3000/users')
        .then(response => response.json())
        .then(users => console.warn(users))
}