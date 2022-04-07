import express from 'express'
const router=express.Router()
import asynchandler from 'express-async-handler'
import buyer from '../Model/buyer.js'
import players from '../Model/player.js'

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

router.post("/login", asynchandler(async (req, res) => {
    try {
        console.log(req.body.user);
        let firstname = req.body.firstname;
        let email = req.body.email;
        console.log(email);
        let user = await buyer.find({ email:email });

        if (user) {
            res.status(200).send(user);
        } else {
            res.status(404).send("the user not found");
        }
    } catch (e) {
        console.log(e);
        res.status(505).send("Internal server error");
    }
}))


    
export default router;
