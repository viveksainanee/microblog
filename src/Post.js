import React, { Component } from 'react';
import Form from './Form';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false
    };
    this.handeClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ edit: true });
  }

  render() {
    let post = this.props.posts.filter(
      p => p.title === this.props.match.params.postid
    );

    let showPost = (
      <div className="Post">
        <h1>{post[0].title}</h1>
        <h2>{post[0].desc}</h2>
        <p>{post[0].body}</p>
        <button onClick={this.handeClick}>Edit</button>
        <button>Delete</button>
      </div>
    );

    return this.state.edit ? <Form post={post[0]} /> : showPost;
  }
}

export default Post;
