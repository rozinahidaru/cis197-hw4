import React from 'react'
import '../App.css'

import Title from './components/Title'
import Post from './components/Post'
import Reply from './components/Reply'
import PublishPost from './components/PublishPost'

const App = () => (
  <>
    <Title />
    <PublishPost />
  </>

)
// <Reply replyToName={Post.name} />

export default App
