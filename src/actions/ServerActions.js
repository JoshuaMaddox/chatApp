import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  // receiveClients(allClients){
  //   console.log('allClients: ', allClients)
  //   AppDispatcher.dispatch({
  //     type: 'RECEIVE_CLIENTS',
  //     payload: { allClients }
  //   }) 
  // },

  receiveAllChatrooms(allChatrooms) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_CHATROOMS',
      payload: { allChatrooms }
    })
  },

  receiveSingleChatroom(singleChatroom) {
     AppDispatcher.dispatch({
      type: 'RECEIVE_SINGLE_CHATROOM',
      payload: { singleChatroom }
    })
  },

  receiveMessages(messages) {
     AppDispatcher.dispatch({
      type: 'MESSAGES_RECEIVED',
      payload: { messages }
    })
  }

}
export default ServerActions