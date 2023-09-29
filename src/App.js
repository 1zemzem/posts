import React, { useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import Button from "./components/UI/button/Button";
import Input from "./components/UI/button/input/Input";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "javaScript1", body: "description1" },
    { id: 2, title: "javaScript2", body: "description2" },
    { id: 3, title: "javaScript3", body: "description3" },
  ]);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      body,
    };
    setPosts([...posts, newPost])
    setTitle("")
    setBody("")
  };

  return (
    <div className="App">
      <form>
        <Input
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text"
          placeholder="Post Title"
        />
        <Input
          value={body}
          onChange={e => setBody(e.target.value)}
          type="text"
          placeholder="Post Description"
        />
        <Button onClick={addNewPost}>Add Post</Button>
      </form>
      <PostList posts={posts} title="Post List" />
    </div>
  );
}

export default App;
