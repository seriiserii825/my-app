import React, {Component} from 'react';
import styles from './Post.module.css';

class Post extends Component {
  render () {
    const {id, title, cb} = this.props;
    return (
      <div className={styles.post}>
        <h3>{title}</h3>
        <button onClick={() => {
          cb(id);
        }}>Delete
        </button>
      </div>
    );
  }
}
export default Post;
