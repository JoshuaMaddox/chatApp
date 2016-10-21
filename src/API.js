import { get, post, put } from 'axios'
import axios from 'axios'
import ServerActions from './actions/ServerActions'
import { browserHistory } from 'react-router'

const API = {
  sendNewRoom(newRoom) {
    post(`/api/chatrooms`, newRoom)
      .then(res => {
        let { data } = res
        console.log('I res.data in API.js', data)
        // ServerActions.receiveClients(data)
      })
      .catch(console.error)
  },

  getAllChatrooms() {
    get(`/api/chatrooms`)
      .then(res => {
        let { data } = res
        ServerActions.receiveAllChatrooms(data)
      })
  },

  getSingleChatroom(roomId) {
    get(`/api/chatrooms/${roomId}`)
      .then(res => {
        let { data } = res
        ServerActions.receiveSingleChatroom(data)
      })
  },

  sendMessage(message, roomId){
    put(`/api/chatrooms/${roomId}`, message)
      .then(res => {
        let { data } = res
        ServerActions.receiveSingleChatroom(data)
      })
  }
}

export default API