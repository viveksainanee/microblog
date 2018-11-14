import React, { Component } from 'react';

class Post extends Component {
  render() {
    let post = this.props.posts.filter(
      p => p.title === this.props.match.params.postid
    );
    return (
      <div className="Post">
        <h1>{post[0].title}</h1>
        <h2>{post[0].desc}</h2>
        <p>{post[0].body}</p>
      </div>
    );
  }
}

export default Post;
