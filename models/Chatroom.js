const mongoose = require('mongoose'),
      moment = require('moment')

const chatroomSchema = new mongoose.Schema({
  name: String,
  description: String,
  participants: Number,
  createdBy: String,
  createdOn: String,
  messages: Array
})

const Chatroom = mongoose.model('Chatroom', chatroomSchema)

module.exports = Chatroom



