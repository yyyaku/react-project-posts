import React, { useState } from "react";
// import Counter from "./components/Counter";
// import ClassCounter from "./components/ClassCounter";
import './styles/App.css'
import PostList from "./components/PostList";

function App() {

  const [posts, setPosts] = useState([
    {id:1, title:'JS', body:'JS - язык програмирования'},
    {id:2, title:'JS 2', body:'JS - язык програмирования'},
    {id:3, title:'JS 3', body:'JS - язык програмирования'},
  ])

  return (
    <div className="App">
      <PostList posts={posts} title="Спиосок постов 1"></PostList>
    </div>
  );
}

export default App;
