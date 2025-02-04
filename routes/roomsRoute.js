const express = require('express');
const router =  express.Router();
const Room = require('../models/room')
router.get(
    "/getallrooms",  async(req,res) =>{
        try {
            const rooms = await Room.find({})
            return res.json({ rooms});
        } catch (error) {
            return res.status(400).json({message: error});
        }

    }
    
);
router.post("/getroombyid", async(req, res) => {
    console.log(req.body);
    try {
        const room = await Room.findOne({ 'roomid': req.body.roomid });
        console.log(room)
    if (room) {
      res.status(200).json(room);
    } else {
      res.status(404).json({ message: 'Room not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
