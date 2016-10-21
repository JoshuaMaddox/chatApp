import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _allChatrooms;
let _singleChatroom;
let _messages; 


class ChatroomsStore extends EventEmitter {
  constructor(){
    super()
    AppDispatcher.register(action => {
      switch(action.type) {
        case 'RECEIVE_CHATROOMS':
          _allChatrooms = action.payload.allChatrooms
          this.emit('CHANGE')
          break
        case 'RECEIVE_SINGLE_CHATROOM':
          _singleChatroom = action.payload.singleChatroom
          this.emit('CHANGE')
          break
        case 'MESSAGES_RECEIVED':
          _messages = action.payload.messages
          this.emit('CHANGE')
          break
      }
    })
  }

  startListening(cb){
    this.on('CHANGE', cb)
  }

  stopListening(cb){
    this.removeListener('CHANGE', cb)
  }

  getAllChatrooms() {
    return _allChatrooms
  }

  getSingleChatroom() {
    return _singleChatroom
  }

  getMessages() {
    return _messages
  }
}

export default new ChatroomsStore