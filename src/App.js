import React, { useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import Select from "./components/UI/select/Select";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "javaScript1", body: "description1" },
    { id: 2, title: "javaScript2", body: "description2" },
    { id: 3, title: "javaScript3", body: "description3" },
  ]);

  const [selectedSort, setSelectedSort] = useState("");

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  const removePost = (post) => {
    setPosts(posts.filter((i) => i.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <Select
        value={selectedSort}
        onChange={sortPosts}
        defaltValue="sort by"
        options={[
          { value: "title", name: "by title" },
          { value: "body", name: "by description" },
        ]}
      />
      {posts.length !== 0 ? (
        <PostList remove={removePost} posts={posts} title="Post List" />
      ) : (
        <h1 style={{ textAlign: "center" }}>No posts</h1>
      )}
    </div>
  );
}
export default App;
