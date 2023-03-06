import axios from "axios";
import React, { useEffect, useState } from "react";
import MyPostsCard from "../components/MyPostsCard";

const Posts = ({ApiKey}) => {
  const [posts, setPosts] = useState([])
  const { id } = JSON.parse(localStorage.getItem("userData"));

  const deletePost = async(postId) => {
    const filterPosts = posts.filter(p => p.postId !== postId)
    await axios.put(`https://63f2206c4f17278c9a20b961.mockapi.io/${ApiKey}/${id}`, {'posts': filterPosts})
    setPosts(filterPosts)
  } 

  const getPosts = async() => {
    const {data} = await axios(`https://63f2206c4f17278c9a20b961.mockapi.io/${ApiKey}/${id}`)
    setPosts(data.posts)
  }
  useEffect(() => {
    getPosts()
  }, [])
  
  return (
  <div className="w-[100%] max-h-[550px] py-5 overflow-auto mr-auto flex flex-col-reverse gap-4">
    {
      posts.map(p => <MyPostsCard key={p.postId} {...p} deletePost={deletePost}/>)
    }
  </div>
  );
};

export default Posts;
