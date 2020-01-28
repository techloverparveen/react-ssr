import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
class App extends Component {
  constructor () {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.handleClick1 = this.handleClick1.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)

     
    this.state={"username":""}
  }

  handleClick (){
    console.log("Clicked!");
    axios.get('https://api.github.com/users/maecapozzi')
    .then(response =>this.setState({username:response.data.name}))
  }


  handleClick1 (){
    console.log("Clicked!");
    axios.get('https://api.github.com/users/techloverparveen')
    .then(response =>this.setState({username:response.data.name}))
  }
  handleClick2 (){
    console.log("API called!");
    axios.get('/users')
    .then(response => console.log(response))
  }


  render () {
    return (
      <div className='button__container'>
        <button className='button' onClick={this.handleClick}>
          Click Me
        </button>
        <button className='button' onClick={this.handleClick1}>
          change Name
        </button>
        <p></p>
        <button className='button' onClick={this.handleClick2}>
         call API
        </button>
        <p>Welcome {this.state.username}</p>
      </div>
    )
  }
}
export default App