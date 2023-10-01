const express = require('express')
const connectToDatabase = require('./config/db')
const userRouter = require('./routes/userRouter')
const productRouter = require('./routes/productRouter')
const app = express()
require('dotenv').config()

const port = process.env.PORT ?? 3001

connectToDatabase()

app.use(express.json())

app.disable('x-powered-by')

app.use('/v1/users',userRouter)
// app.use('/v1/products',productRouter)

app.listen(port, ()=>{
    console.log(`Listening on port http://localhost:${port}`)
})