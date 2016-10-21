const mongoose = require('mongoose')

const allRoomsSchema = new mongoose.Schema({
  chatRooms: Array,
  numberOfRooms: Number,
  totalParticipants: Number
})

const AllRooms = mongoose.model('AllRooms', allRoomsSchema)

module.exports = AllRooms