import express from 'express'
const router=express.Router()
import asynchandler from 'express-async-handler'
import buyer from '../Model/buyer.js'
import players from '../Model/player.js'
import Auction from '../Model/Auction.js'
router.post('/auctionapi', asynchandler(async(req, res) => {
    try {
        let { buyerId, playerId, amount } = req.body
    
    if (playerId) {
        let player = await players.findById(playerId);
        player.sold = true;
        player.save();
        let thebuyer = await buyer.findById(buyerId);
         let newitem = {
                playerid: player._id,
                amount: amount,
            }
        let found = await Auction.find({ buyerperson: thebuyer._id });

        if (found.playerlist) {
            console.log(found);
             found.playerslist.push(newitem);
            await found.save();
            return res.status(200).send("successfully uploaded")
        } else {
            let auct = new Auction({
                buyerperson: thebuyer._id,
                playerslist: [newitem]
            }).save();
            return res.status(200).send("successfully uploaded");
        }
    } else {
        console.log("request body is not defined");
    }
    } catch (e) {
        console.log(e);
        return res.status(500).send("Internal server error");
    }
    
}))

router.get("/:buyerid", asynchandler(async (req, res) => {
    
    let buyerid = req.params.buyerid;

    try {

        let auctioner = await Auction.find({ buyerperson: buyerid }).populate("playerslist.playerid");

        if (auctioner) {
            console.log(auctioner.playerslist);
            let list = JSON.stringify(auctioner.playerslist);
            return res.status(200).send(auctioner.playerslist);
        } else {
            return res.status(200).send("this buyer did'nt aution for anyone");
        }
        
    } catch (e) {
        console.log(e);
        return res.status(500).send("Internal server error");
    }
}))


router.get("/")

export default router;