import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
export default class SideNav extends Component {

  render() {
    return (
      <div className='links'>
        <ul >
            <li >
                <NavLink  className='link' to='/'> Static Info </NavLink>
            </li>
            <li value='/announcement'>
                <NavLink className='link' to='/announcement'>Announcement </NavLink>
            </li>
            <li value='/poc'>
                <NavLink className='link' to='/poc'>Point Of Contact </NavLink>
            </li>
            <li value='/groupemail'>
                <NavLink className='link' to='/groupemail'>Group Email </NavLink>
            </li>
       </ul>
      </div>
    )
  }
}
