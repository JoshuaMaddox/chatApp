import React, { Component } from 'react'
import ChatroomsStore from '../stores/ChatroomsStore'
import ToAPIActions from '../actions/ToAPIActions'
import uuid from 'uuid'
import moment from 'moment'
import { Link } from 'react-router'

export default class AllChatrooms extends Component {
  constructor() {
    super();
    this.state = {
      allChatrooms: ChatroomsStore.getAllChatrooms(),
      currentRoom: ChatroomsStore.getSingleChatroom()
      // messages: ChatroomsStore.getMessages()
    }
    this._onChange = this._onChange.bind(this)
    this.goToRoom = this.goToRoom.bind(this)
    this.sendNewMessage = this.sendNewMessage.bind(this)
  }

  componentWillMount() {
    ToAPIActions.getAllChatrooms()
    ChatroomsStore.startListening(this._onChange)
  }

  componentWillUnmount() {
    ChatroomsStore.stopListening(this._onChange)
  }

  _onChange() {
    this.setState({
      allChatrooms: ChatroomsStore.getAllChatrooms(),
      currentRoom: ChatroomsStore.getSingleChatroom()
      // messages: ChatroomsStore.getMessages()
    })
  }

  goToRoom(e) {
    let roomId = e.target.id
    ToAPIActions.getChatroom(roomId)
  }

  sendNewMessage(e) {
    const { newMessage } = this.refs
    let body = newMessage.value
    let roomId = e.target.id
    let message = {
      id: uuid(),
      dateTime: moment().format('lll'),
      userName: 'Joshua Maddox',
      body: body
    }
    ToAPIActions.sendMessage(message, roomId)
  }

  render() {

    const { allChatrooms, currentRoom, messages } = this.state

    let showChatroomsList;
    let currentRoomShow;
    let messageBoard;

    if(currentRoom){
      currentRoomShow = (
        <div className="chatroomContainer" key={uuid}>
          <div className="chatroomName">
            <h1>{currentRoom.name}</h1>
          </div>
          <div className="chatroomMessages">
            {!currentRoom.messages[0] ? <p>Start The Chat</p> : messageBoard = currentRoom.messages.map((message, i) => {
              return (
                <div className="singleMessage" key={message.id}>
                  <h5>{message.dateTime} - {message.userName} said:</h5>
                  <p>{message.body}</p>
                </div>
              )
            })}
          </div>
          <div className="chatroomForm">
            <input ref='newMessage' type="text"/>
            <button id={currentRoom._id} onClick={this.sendNewMessage}>Send</button>
          </div>
        </div> 
      )
    }

    if(allChatrooms) {
      showChatroomsList = allChatrooms.map((room, i) => {
        return (
          <div className="chatroomsContainer" key={room._id}>
            <div className="chatroomsItem tooltip">{room.name}
              <span className="tooltiptext">{room.description} {room.createdBy}</span>
            </div>
            <div className="chatroomsItem">
              <button id={room._id} className='chatroomsItem goToChatBtn' onClick={this.goToRoom}>Go To Room</button>
            </div>
          </div>
        )
      })
    } else {
      showChatroomsList = <h2>No Chat Rooms Created</h2>
    }
    return (
     <div className="mainContainer">
      <div className="navRow">
        <h3 className="brand"><Link to={'/'}>HOUSE-O-CHAT</Link></h3>
        <div className="navBtn">
          <Link to={'/chatrooms'}>Find Rooms</Link>
        </div>
        <div className="navBtn">
          <Link to={'/chatrooms/new'}>Add Rooms</Link>
        </div>
      </div>
      <div className="mainChatroomsContainer">
        <div className="columnOne">
          {showChatroomsList}
        </div>
        <div className="columnTwo">
          {currentRoomShow}
        </div>
      </div>
     </div> 
    )
  }
}
