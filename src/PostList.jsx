import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { PostListContext } from "./store/post-list-store";
import Loader from "./store/Loader";

function PostList() {
  const { postList, fetchPosts } = useContext(PostListContext);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{

    if(postList.length==0){
      
 fetchPosts(setLoading);
  }
  else{
    setLoading(false);
  }
   
  },[postList, fetchPosts])

  if (loading) {
    return (
      <div className="loader-container">
        <Loader loading={loading} />
      </div>
    );
  }
  return (
    <>

      { postList.length==0 ? <center><h1 style={{marginTop: "100px"}}> Post list is Empty</h1></center> :  postList.map((post, index) => {
        return <Card key={index} post={post} />;
      })}
    </>
  );
}

export default PostList;
