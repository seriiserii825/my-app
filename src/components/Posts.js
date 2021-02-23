import React from 'react';
import Post from "./Post";

function Posts ({posts, cb}) {
  return (
    <ul className="posts">
      {posts.map(({id, title}) => (
        <Post cb={cb} key={id} title={title} id={id}/>
      ))}
    </ul>
  );
}

export default Posts;
