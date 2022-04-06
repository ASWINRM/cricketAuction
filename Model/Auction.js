import mongoose from 'mongoose'
const Schema = mongoose.Schema;
import connectDB from '../db.js';
connectDB();
const Auctionschema=new Schema({
    buyer: {
       type:mongoose.Types.ObjectId,
        ref:"buyer"
    },
    players: [
        {
            playerid: {
                 type:mongoose.Types.ObjectId,
                 ref:"players"
            },
            amount: {
                type: Number,
                required:true
            },
            soldtime: {
                type: Date,
                default:Date.now()
            }

        }
    ]
   
},{timestamps:true},{collection: 'Auction'})



const buyers= mongoose.models.user||mongoose.model("Auction",Auctionschema);

export default buyers;