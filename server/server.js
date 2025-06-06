const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')

//Middleware
app.use(cors({
    original : process.CLIENT_UR,
    credentials : true,
    optionsSuccessStatus : 200
}))
app.use(express.json())
app.use(cookieParser())
require('dotenv').config()

//Port assign
app.listen(process.env.PORT, () => {
    console.log("Server started at port",process.env.PORT)
})

//MongoDB connection string
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('DB connected!')
    })
    .catch((err) => {
        console.log('DB not connected ', err)
    })

app.get("/", (req,res) => {
    if (mongoose.connection.readyState === 1) {
        res.send(`<h1>Server is Started and Running</h1> <h1 style="color:green">Database connnected successfully!!</h1>`)
    } else {
        res.send(`<h1>Server is Running</h1> <h1 style="color:red;">Database not connnected! Check connection string</h1>`)
    }
})

const registerRoute = require('./router/registerRouter')
app.use('/api', registerRoute)

const loginRoute = require('./router/loginRouter')
app.use('/api', loginRoute)  