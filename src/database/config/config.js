module.exports = {
    "development": {
        "username": "franAdmin",
        "password": "Adrian12234..",
        "database": "Kruto_Store_Grupo3",
        "host": "45.79.201.214",
        "dialect": "mysql",
<<<<<<< HEAD
        "port": "3306"
      },
=======
        "port":"3306"
    },
>>>>>>> bf7e6a3e162b4aab373c4c748c5a4c341f4be22d
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