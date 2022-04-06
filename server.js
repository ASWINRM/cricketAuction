import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './db.js'
import morgan from 'morgan'
import path from 'path'
import Seeder from './Seeder.js'
dotenv.config();
const app = express()
import playerroute from './route/playerroute.js'
const __dirname = path.resolve()
app.use(cors())
app.use(express.json())

connectDB();








const PORT=process.env.PORT||5000

const server = app.listen(PORT, (req, res) => {
   
    console.log("Server is running on the port : "+process.env.PORT);
})
app.get('/', async(req, res) => {
    await Seeder();
    res.status(200).send("API is running")
})

app.use('/players', playerroute);

process.on('unhandledRejection', (err, Promise) => {
    console.log("logged error " + err)
    server.close(() => process.exit(1))
})