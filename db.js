import mongoose from 'mongoose'
import dotenv from 'dotenv';
dotenv.config();
const connectDB= async()=>{

    try {
        
        

        const connect= await  mongoose.connect("mongodb://AswinRm:projects@cluster0-shard-00-00.47e1x.mongodb.net:27017,cluster0-shard-00-01.47e1x.mongodb.net:27017,cluster0-shard-00-02.47e1x.mongodb.net:27017/CricketAuction?ssl=true&replicaSet=atlas-sjczfr-shard-0&authSource=admin&retryWrites=true&w=majority",{
             useNewUrlParser: true, 

             useUnifiedTopology: true 
        }).then(() => {
            console.log("connected to mongo db")
        }).catch((err) => {
            if (err) {
                console.log(err);
              }
             });

        
        

    } catch (e) {
        console.log(e);
        console.log("error occured")
    }
}

export default connectDB;