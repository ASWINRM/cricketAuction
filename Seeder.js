import mongoose from 'mongoose'
import connectDB from './db.js'
import dotenv from 'dotenv'
import players from './Model/player.js'
import playersdata from './playersdata.js'
import buyer from './Model/buyer.js'
import buyersdata from './buyersdata.js'
dotenv.config()

connectDB()

const importData = async () => {
  try {
   

     await players.insertMany(playersdata)
    // await buyer.insertMany(buyersdata)

    console.log('Data Imported!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}



export default importData