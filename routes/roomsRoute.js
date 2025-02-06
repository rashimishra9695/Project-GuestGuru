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
router.get("/getroombyid/:roomid", async (req, res) => {
  try {
      const { roomid } = req.params
      console.log(`Fetching room with ID: ${roomid}`);

      const room = await Room.findOne({ roomid });
      if (!room) {
          return res.status(404).json({ error: "Room not found" });
      }

      res.json(room);
  } catch (error) {
      console.error("Error fetching room details:", error);
      res.status(500).json({ error: "Internal Server Error" });
  }
});
module.exports = router;
