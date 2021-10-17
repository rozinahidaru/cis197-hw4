import React from 'react' 

const Post = () => {
    return (
    <><h2>New Post</h2><form>
        <label>
            Name: 
            <div>
            <input type="text" name="name" /> </div>
        </label>
        <label>
            Write a new post... <div>
                <input type="text" name="post" />
            </div>
        </label>
        <button className="button" type="submit" >Post</button>
    </form></>
    )
}

export default Post