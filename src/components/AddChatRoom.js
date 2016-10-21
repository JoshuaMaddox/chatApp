import React, { Component } from 'react'
import moment from 'moment'
import ToAPIActions from '../actions/ToAPIActions'

export default class AddChatRoom extends Component {
  constructor() {
    super();

    this.createNewRoom = this.createNewRoom.bind(this)
  }

  createNewRoom(e) {
    e.preventDefault()
    const { roomOwner, roomName, roomDescription } = this.refs
    let newRoom = {
      name: roomName.value,
      description: roomDescription.value,
      createdBy: roomOwner.value,
      createdOn: moment().format('lll')
    }  
    ToAPIActions.sendNewRoom(newRoom)
  }

  render() {

    return (
      <div className='chatRoomFromContainer'>
        <form className='addChatRoomForm' onSubmit={this.createNewRoom}>
          <input type="text" ref='roomOwner' className="formElement" placeholder='Alias of room owner' />
          <input type="text" ref='roomName' className="formElement" placeholder="Give your room a name" />
          <input type="text" ref='roomDescription' className="formElement" placeholder="What's this room about?" />
          <button type="submit">Submit Room</button>
        </form>
      </div>
    )
  }
}
