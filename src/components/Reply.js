import React, { useState } from 'react'
// import Post from './Post'

const Reply = () => {
  const [name, editName] = useState('')
  const [reply, editReply] = useState('')
  // const replyToName = Post.poster

  return (
    <>
      <h3> Replies </h3>
      <form name="reply">
        <div>
          <input type="text" id="name" placeholder="Name..." value={name} onChange={e => editName(e.target.value)} required />
        </div>
        <div>
          <input type="text" id="post" value={`@${name} ${reply}`} onChange={e => editReply(e.target.value)} required />
        </div>
        <button className="button" type="submit" disabled={name.length === 0 || reply.length === 0}>Submit</button>

      </form>
    </>
  )
}

export default Reply
