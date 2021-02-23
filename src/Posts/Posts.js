import React from 'react';
import styles from './Posts.module.css';

function Posts ({data}) {
  const posts = data.map(item => {
    return (
      <li key={item.id}>
        <h3>{item.title}</h3>
        <p>{item.body}</p>
      </li>
    )
  });
  return (
    <ul className={styles.posts}>
      {posts}
    </ul>
  );
}

export default Posts;
