module.exports = {
    "development": {
        "username": process.env.DBUSER,
        "password": process.env.DBPASS,
        "database": process.env.DBNAME,
        "host": process.env.DBHOST,
        "dialect": "mysql",
        "port": process.env.DBPORT
    },
    "test": {
        "username": process.env.DBUSER,
        "password": process.env.DBPASS,
        "database": process.env.DBNAME,
        "host": process.env.DBHOST,
        "dialect": "mysql"
    },
    "production": {
        "username": process.env.DBUSER,
        "password": process.env.DBPASS,
        "database": process.env.DBNAME,
        "host": process.env.DBHOST,
        "dialect": "mysql"
    }
}