import mysql from "mysql2";

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "server"
})


db.connect((err)=>{
    if(err) return console.log(err);
    console.log("database connected")
})

export default db;