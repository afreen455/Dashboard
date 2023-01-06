import React, { Component } from 'react'
import {RiDeleteBin2Line} from 'react-icons/ri'
export default class StaticInfo extends Component {
    state={
    text:'',
    Info:[],
    del:''
    }
    delete=(val)=>{
        if (val > -1) {
            this.state.Info.splice(val, 1)
        }
            this.setState({
               Info:[...this.state.Info]
            })
    }

    handlechange=(e)=>{
        this.setState({
            text:e.target.value
        })
    }
    handleclick=()=>{
        if(this.state.text!==''){
        this.setState({
            Info:[this.state.text,...this.state.Info],
            text:''
        })
    }
    }

  render() {
    return (     
     <div className='main-container'>
         <div className='container'>
            <h1> Static Information</h1>
        <div>
            <input
             onChange={this.handlechange}
              id='textarea'
               type='textarea'
                placeholder='write info here'
                value={this.state.text}/>
                
            <button onClick={this.handleclick}>Post</button>
        </div>
        <div>
            <ul className='list'>
                {
                    this.state.Info.map((item,index)=>{
          return   <li>{item} <button onClick={()=>{this.delete(index)}}>{<RiDeleteBin2Line/>}</button></li>

                    })
                }
            </ul>
        </div>
      </div>
     </div>
    )
  }
}
