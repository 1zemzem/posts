import React from "react";
import PostItem from "./PostItem";


const PostList = ({ posts, title, remove}) => {
  if(!posts.length) {
    return (
      <h1 style={{ textAlign: "center", marginTop: "40px" }}>No posts</h1>
    )
  }
  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "20px", marginTop: "40px" }}>{title}</h1>
      {posts.map((post, index) => (
        <PostItem remove={remove} number={index +1} post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostList;
