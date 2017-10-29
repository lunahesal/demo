import React, { Component } from 'react'
import './App.css'
import CommentBox from '../CommentBox/CommentBox'
import PostBox from '../PostBox/PostBox'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="upper">
          <PostBox />
        </div>
        <div className="lower">
          <CommentBox />          
        </div>
      </div>
    )
  }
}

export default App
