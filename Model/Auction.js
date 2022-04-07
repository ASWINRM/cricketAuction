import mongoose from 'mongoose'
const Schema = mongoose.Schema;
import connectDB from '../db.js';
connectDB();
const Auctionschema=new Schema({
    buyerperson: {
       type:mongoose.Types.ObjectId,
        ref:"buyer"
    },
    playerslist: [
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



const Auction= mongoose.models.user||mongoose.model("Auction",Auctionschema);

export default Auction;