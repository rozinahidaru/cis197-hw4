import React from 'react'
import '../App.css'

import Post from './components/Post'
import Reply from './components/Reply'

const App = () => (
  <>
    <h1>CIS 197 Community!</h1>
    <Post />
  </>

)
// <Reply replyToName={Post.name} />

export default App
