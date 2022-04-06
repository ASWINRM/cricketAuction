import mongoose from 'mongoose'
const Schema = mongoose.Schema;
import connectDB from '../db.js';
connectDB();
const Playerschema=new Schema({
    Firstname:{
        type:String,
        required:true
    },
    Lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    image: {
      type:String  
    },
    Age: {
        type: Number,
        required:true
    },
    matches: {
        type: Number,
        required:true
    },
    Category: {
        type: String,
        required:true
    },
    average: {
        type: Number,
        required:true
    },
    carrerbest: {
         type: String,
        required:true
    },
    Noofmatchplayed: {
        type: Number,
        required:true
    },
    Basicprice: {
        type: Number,
        required:true
    },
    Runs: {
        type: Number
        
    },
    Wickets: {
        type:Number
    },
    sold: {
        type: Boolean,
        default:false
    }
   
},{timestamps:true},{collection: 'players'})



const players= mongoose.models.user||mongoose.model("players",Playerschema);

export default players;