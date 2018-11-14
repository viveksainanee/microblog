import React, { Component } from 'react';
import Form from './Form';
import Comment from './Comment';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      comment: ''
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addComment = this.addComment.bind(this);
    this.findPost = this.findPost.bind(this);
  }

  handleEdit() {
    this.setState({ edit: true });
  }

  handleDelete(title) {
    // call function to delete in the master list in microblog with the title
    this.props.deleteBlogPost(title);
    this.props.history.replace('/');
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  findPost() {
    return this.props.posts.filter(
      p => p.title === this.props.match.params.postid
    )[0];
  }

  addComment(evt) {
    evt.preventDefault();
    //call function here to send the whole post details
    let post = this.findPost();
    post.comments = [this.state.comment, ...post.comments];

    this.props.updateBlogPost(post);

    this.setState({ comment: '' });
  }

  render() {
    let post = this.findPost();

    let showPost = (
      <div className="Post">
        <h1>{post.title}</h1>
        <h2>{post.desc}</h2>
        <p>{post.body}</p>
        <button onClick={this.handleEdit}>Edit</button>
        <button onClick={() => this.handleDelete(post.title)}>Delete</button>
        <div className="Post-commments">
          <h3> Comments</h3>

          <form onSubmit={this.addComment}>
            <input
              onChange={this.handleChange}
              name="comment"
              value={this.state.comment}
            />
            <button> Submit </button>
          </form>
          {post.comments.map(comment => (
            <Comment comment={comment} />
          ))}
        </div>
      </div>
    );

    return this.state.edit ? <Form post={post} /> : showPost;
  }
}

export default Post;
