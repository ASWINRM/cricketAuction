import express from 'express'
const router=express.Router()
import asynchandler from 'express-async-handler'
import buyer from '../Model/buyer.js'

router.get("/:id", asynchandler(async (req, res) => {
    try {
        let buyerId = req.params.id;
        let reqbuyer = await buyer.find({ _id: buyerId });

        if (reqbuyer) {
            res.status(200).send(reqbuyer);
        } else {
            res.status(200).send("no buyer found")
        }
    } catch (e) {
        console.log(e);
        res.status(500).send("Internal Server Error");
    }
}))
    
    
router.get("/allbuyers",asynchandler(async(req,res)=>{
        try{
            let allbuyers = await buyer.find({});

            if (allbuyers) {
                res.status(200).send(allbuyers);
            } 
        } catch (e) {
            console.log(e);
            res.status(500).send("Internal Server Error");
        }
}))



    
export default router;
