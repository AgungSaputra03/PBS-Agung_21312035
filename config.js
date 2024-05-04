// request library mysql
const mysql = require('mysql')

// variabel koneksi untuk database
const db = mysql.createConnection ({
    host:'sql6.freesqldatabase.com', // Menentukan host database, dalam kasus ini, database berada di localhost
    user:'sql6703649', // Menentukan pengguna (user) yang akan digunakan untuk mengakses database
    password:'ykeI4tDkUQ', // Menentukan kata sandi (password) untuk pengguna yang akan digunakan
    database:'sql6703649' // Menentukan nama database yang akan digunakan
})

// kirimkan variabel keluar untuk digunakan diluar file
module.exports = db