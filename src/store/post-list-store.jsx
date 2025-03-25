import { createContext, useEffect, useState } from "react";


export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  setPostListData: () => {},
  fetchPosts: () => {},
});

export const PostListProvider = ({ children }) => {
  let [postList, setPostList] = useState([]);
 
  const setPostListData = (data) => {
    setPostList(data);
  };  
  const addPost = (post) => {
    setPostList([post, ...postList]);
  };
  const deletePost = (id) => {
    setPostList(postList.filter((post) => post.id !== id));
  };
  const fetchPosts = async (setLoading) => {
    setLoading(true);
    setTimeout(() => {
      fetch("https://dummyjson.com/posts")
        .then((res) => res.json())
        .then((obj) => {
          setPostList(obj.posts);
          setLoading(false);
        });
    }, 1000);
  };
  return (
    <PostListContext.Provider value={{ postList, addPost, deletePost ,setPostListData,fetchPosts}}>
      {children}
    </PostListContext.Provider>
  );
};
