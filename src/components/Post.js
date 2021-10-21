import React, { useState } from 'react' 

const Post = () => {
    const [name, editName] = useState('')
    const [post, editPost] = useState('')

    return (
    <><h2>New Post</h2>
    <form name="postForm">
        <div>
        <input type="text" id="name" placeholder="Name..." value={name} onChange={e => editName(e.target.value)} required/> </div>
        <div>
            <input type="text" id="post" placeholder="Write a new post..." value={post} onChange={e => editPost(e.target.value)}required/>
        </div>
        <div>
            <button className="button" type="submit" disabled={name.length === 0 || post.length === 0} onSubmit={onSubmit(name, post)}>Submit</button>
        </div>
    </form>
    <div onSubmit={e => e.target.reset()}> 
    <h3 style={{color: 'blue'}}>{name}</h3>
    <div>{post}</div>
    </div> 
    </>
    
    )
    
}

const onSubmit = (name, post) => {
    let oldName = name
    let oldPost = post
    return (
    <><h3 style={{color: 'blue'}}>{oldName}</h3>
    <div>{oldPost}</div>
    </>
    )
}

/*
const changeName = (newName) => (
    document.getElementById('name') = newName
) */
/*
let btn = document.getElementsByClassName('button')
let name = document.getElementById('name')
name.addEventListener('change', isFormValid)

const isFormValid = () => {
    if (document.getElementById('name') === '' && document.getElementById('post') === '') {
        btn.disabled = true
    } else {
        btn.disabled = false
    }
    //return document.getElementById('name') === '' && document.getElementById('post') === ''
} */

export default Post