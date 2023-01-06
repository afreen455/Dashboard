import React, { Component } from 'react'
import {Mock} from './Mock'
export default class GroupEmail extends Component {
  render() {
    return (
      <div className='main-container'>
        
        <form>
            <label>From :</label>
          
            <input placeholder='Enter your email id' type='email'/>
            <label>To :</label>
            <select>
           {
            Mock.map((item,index)=>{
                return(             
                    <option key={index}>{item.email}</option>
                )
            })
           }
             </select>
            <label>Subject :</label>
            <textarea/>
            <label>Email content body :</label>
            <textarea/>
            <button>OK</button>
        </form>
      </div>
    )
  }
}
