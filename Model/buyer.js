import mongoose from 'mongoose'
const Schema = mongoose.Schema;
import connectDB from '../db.js';
connectDB();
const Buyerschema=new Schema({
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
    
   
},{timestamps:true},{collection: 'buyer'})



const buyer= mongoose.models.user||mongoose.model("buyer",Buyerschema);

export default buyer;