import React, { useState } from 'react'
import Post from './Post'

export const PostList = new Map()

const PublishPost = () => {
  const [poster, editName] = useState('')
  const [post, editPost] = useState('')

  const handleSubmit = () => {
    const oldName = poster
    const oldPost = post
    PostList.set(oldName, oldPost)
    console.log(PostList)
    return (<Post pl={PostList} />)
  }

  return (
    <>
      <label>New Post</label>
      <form
        name="postForm"
        onSubmit={e => {
          e.preventDefault()
          handleSubmit(e.target[0].value, e.target[1].value)
          e.target[0].value = ''
          e.target[1].value = ''
        }}
      >
        <div>
          <input type="text" id="name" placeholder="Name..." value={poster} onChange={e => editName(e.target.value)} required />
          {' '}

        </div>
        <div>
          <label> Write a new post... </label>
          <textarea cols="30" rows="10" name="post" value={post} onChange={e => editPost(e.target.value)} required />
        </div>
        <div>
          <button className="button" type="submit" disabled={poster.length === 0 || post.length === 0}>Submit</button>
        </div>
      </form>
      <Post pl={PostList} />
    </>

  )
}

export default PublishPost
