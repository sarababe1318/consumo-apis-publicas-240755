require("dotenv").config()

const express = require("express")
const cors = require("cors")
const path = require("path")

const app = express()

app.use(cors())
app.use(express.static("public"))

app.set("view engine","ejs")
app.set("views", path.join(__dirname,"src/views"))

app.get("/",(req,res)=>{
 res.render("index")
})

app.listen(3000,()=>{
 console.log("Servidor corriendo en http://localhost:3000")
})