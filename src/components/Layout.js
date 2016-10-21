import React, { Component } from 'react'
import { Link } from 'react-router'
import ChatroomsStore from '../stores/ChatroomsStore'



export default class Layout extends Component {
  constructor() {
    super();
   }

   sendMessage() {
   }

  render() {

    return (
      <div>
        <div className="navRow">
          <h3 className="brand"><Link to={'/'}>HOUSE-O-CHAT</Link></h3>
          <div className="navBtn">
            <Link to={'/chatrooms'}>Find Rooms</Link>
          </div>
          <div className="navBtn">
            <Link to={'/chatrooms/new'}>Add Rooms</Link>
          </div>
        </div>
        <div className="mainImg">
          <div className="backImg">
            <div className="innerDiv">
              <h2 className='bannerText'>Chat Rooms</h2>
            </div>
          </div>
        </div>
        <div className="displayRow">
          
        </div>
      </div>
    )
  }
}
