import React, { useState } from 'react' 
import Reply from './Reply'


const Post = (pl) => {
    /*
    const posts = PostList.map((p) => 
    <li>p</li>
    ) */
    console.log('running Post')
    var posts = []
    console.log('postList', pl)
    /*posts = pl.forEach(p =>
        <li>{p}</li>
    ) */
    console.log('posts')
    console.log(posts)
    return (
    <><h2>Published Posts</h2>
    <div>
        <ul>{posts}</ul>
    </div>
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