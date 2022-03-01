require("dotenv").config()
module.exports = {
    development: {
        "username": "franAdmin",
        "password": "Adrian12234..",
        "database": "Kruto_Store_Grupo3",
        "host": "45.79.201.214",
        "dialect": "mysql"
        // "username": process.env.DBUSER,
        // "password": process.env.DBPASS,
        // "database": process.env.DBNAME,
        // "host": process.env.DBHOST,
        // "dialect": "mysql",
    },
    test: {
        "username": process.env.DBUSER,
        "password": process.env.DBPASS,
        "database": process.env.DBNAME,
        "host": process.env.DBHOST,
        "dialect": "mysql"
    },
    production: {
        "username": process.env.DBUSER,
        "password": process.env.DBPASS,
        "database": process.env.DBNAME,
        "host": process.env.DBHOST,
        "dialect": "mysql"
    }
}