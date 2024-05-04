// Memuat modul Express.js
const express = require('express')
const app = express()
const port = 3002
// pemanggilan request body parse
const bodyParser = require('body-parser')
// pemanggilan file config.js
const db = require('./config.js')
// pemanggilan file request.js
const response = require('./request.js')

// penggunaan body parse
app.use(bodyParser.json())

// tambahkan route get data
app.get('/Customers', (req,res)=>{
    const sql = 'SELECT * FROM Customers'
    db.query(sql,(error, result)=>{
        response(200,result,'data penjualan',res)
    })
})

// Mengatur endpoint untuk menangani permintaan GET dengan parameter email untuk mendapatkan detail pelanggan berdasarkan email
app.get('/Customers/:email', (req,res)=>{
    // Mendapatkan nilai email dari parameter URL menggunakan req.params
    const email = req.params.email
    // Membuat query SQL untuk memilih semua data pelanggan dengan email tertentu
    const sql = `SELECT * FROM Customers where email ='${email}'`
    // Menjalankan query SQL menggunakan db.query() untuk mendapatkan detail pelanggan berdasarkan email
    db.query(sql, (err, result)=>{
        // Penanganan kesalahan jika terjadi error saat mengeksekusi query
        if(err) throw err
        // Mengirim respons dengan status kode 200 dan data detail pelanggan ke klien
        response(200, result, "get detail customers", res)
    })
})

app.get('/Laptops', (req,res)=>{
    const sql = 'SELECT * FROM Laptops'
    db.query(sql,(error, result)=>{
        response(200,result,'data penjualan',res)
    })
})
app.get('/Sales', (req,res)=>{
    const sql = 'SELECT * FROM Sales'
    db.query(sql,(error, result)=>{
        response(200,result,'data penjualan',res)
    })
})

// Endpoint untuk menangani HTTP POST request ke /data
app.post('/Customer',(req, res)=>{
    const {nama, email, nohp} = req.body
    const sql = `INSERT INTO Customers (customer_name, email, phone_number) VALUES ('${nama}','${email}','${nohp}');`
    // Menjalankan query SQL menggunakan db.query() untuk menambahkan data ke dalam database
    db.query(sql,(error, fields)=>{
        // Penanganan kesalahan jika terjadi error saat mengeksekusi query
        if(error) response(500, 'invalid', `${nama} dengan email ${email} sudah ditambahkan`, res)
        // Penanganan jika query berhasil dieksekusi tanpa kesalahan
        if(fields?.affectedRows){
            const data = {
                isSucces: fields.affectedRows,
                id: fields.insertid,
            }
            // Mengirim respons dengan status kode 200 dan data keberhasilan ke klien
            response(200, data, "Data berhasil di simpan", res)
        }
    })
})
// Memulai server Express untuk mendengarkan pada port yang ditetapkan
app.listen(port, () => {
    console.log(`Runing in port ${port}`)
})