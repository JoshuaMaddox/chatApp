import API from '../API'

const ToAPIActions = {
  sendNewRoom(newRoom) {
    API.sendNewRoom(newRoom)
  },

  getAllChatrooms() {
    API.getAllChatrooms()
  },

  getChatroom(roomId) {
    API.getSingleChatroom(roomId)
  },

  sendMessage(message, roomId) {
    API.sendMessage(message, roomId)
  }
}

export default ToAPIActions