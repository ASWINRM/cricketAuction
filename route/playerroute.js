import express from 'express'
const router=express.Router()
import asynchandler from 'express-async-handler'

import players from '../Model/player.js'

router.get("/playerdetails",asynchandler(async(req,res)=>{
        try{
            let allplayers = await players.find({});

            if (allplayers) {
                // console.log(allplayers);
                res.status(200).send(allplayers);
            } 
        } catch (e) {
            console.log(e);
            res.status(500).send("Internal Server Error");
        }
}))


router.get("/:id", asynchandler(async (req, res) => {
    try {
        let playerId = req.params.id;
        let reqplayer = await players.find({ _id: playerId });

        if (reqplayer) {
            res.status(200).send(reqplayer);
        }
    } catch (e) {
        console.log(e);
        res.status(500).send("Internal Server Error");
    }
}) );

export default router;

