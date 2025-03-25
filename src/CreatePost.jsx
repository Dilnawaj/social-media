import React, { useState } from 'react'
import { useContext } from 'react';
import { PostListContext } from './store/post-list-store';
import { useNavigate } from 'react-router-dom';

function CreatePost() {
  const navigate = useNavigate()
const [post,setPost] = useState(
  {
    id:  Math.floor(Math.random() * 30) + 1,
    title: "",
    body: "",
    tags: [],
    reactions:{
      likes:0,
      dislikes:0
    }
  
})


 
  const{addPost}= useContext(PostListContext);


const handleChange = (e,type) => {

 if(type=="tags")  {
  setPost({...post,[type]:e.target.value.split(" ")}) 
 }else if(type=="likes" || type=="dislikes")
 {

  setPost({...post,reactions:{...post.reactions,[type]:e.target.value}})

 }
 else{
  setPost({...post,[type]:e.target.value}) 
 } 
 

}


const handleSubmit = (e) => {
  e.preventDefault()  
  console.log("Post "+post)
  
  fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: post.title,
      userId: post.id,
      body: post.body,
      tags: post.tags,
      reactions:{
        likes:post.reactions.likes,
        dislikes:post.reactions.dislikes,
      }
    })
  })
    .then(res => res.json()) // First, parse the response JSON
    .then(data => {
      addPost(data); // Pass the parsed data to addPost function
      console.log("data", data);
      alert("Post added successfully")
      navigate('/')
    })
    .catch(error => console.error("Error:", error)); // Handle errors
  


  setPost({
    id:  Math.floor(Math.random() * 30) + 1,
    title: "",
    body: "",
    tags: [],
    reactions:{
      likes:0,
      dislikes:0
    }
  })

}

  return (
    <center><form className='create-post' onSubmit={handleSubmit} > 
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Title </label>
      <input type="text" value= {post.title} onChange={(e)=>handleChange(e,"title")} placeholder='Enter title for the Post' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">body</label>
      <input type="text-area" value= {post.body}  onChange={(e)=>handleChange(e,"body")}  placeholder='Enter content for the Post' className="form-control" id="exampleInputPassword1"/>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Enter Likes</label>
      <input type="number" value= {post.reactions.likes}  onChange={(e)=>handleChange(e,"likes")}  placeholder='Enter likes for the Post' className="form-control" id="exampleInputPassword1"/>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Enter dislikes</label>
      <input type="number" value= {post.reactions.dislikes}  onChange={(e)=>handleChange(e,"dislikes")}  placeholder='Enter dislikes for the Post' className="form-control" id="exampleInputPassword1"/>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Enter Tags </label>
      <input type="text"  value={Array.isArray(post.tags) ? post.tags.join(" ") : post.tags}   onChange={(e)=>handleChange(e,"tags")} placeholder='Enter tags using space' className="form-control" id="exampleInputPassword1"/>
    </div>
    <button type="submit"   className="btn btn-primary">Post</button>
  </form></center>
  )
}

export default CreatePost