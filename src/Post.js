import React, { Component } from 'react';
import Form from './Form';
import Comment from './Comment';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { addPost, updatePost, deletePost } from './actions';

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
    this.deleteComment = this.deleteComment.bind(this);
  }

  // HANDLER FUNCTIONS /////////////////////////

  handleEdit() {
    this.setState({ edit: !this.state.edit });
  }

  handleDelete(id) {
    // call function to delete in the master list in microblog with the id
    // this.props.deleteBlogPost(id);
    this.props.deletePost(id);
    this.props.history.replace('/');
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  addComment(evt) {
    evt.preventDefault();
    //call function here to send the whole post details
    let post = this.props.posts[this.props.match.params.postid];
    post.comments = [this.state.comment, ...post.comments];

    this.props.updatePost(post);

    this.setState({ comment: '' });
  }

  deleteComment(idx) {
    let post = this.props.posts[this.props.match.params.postid];
    post.comments = [
      ...post.comments.slice(0, idx),
      ...post.comments.slice(idx + 1, post.comments.length)
    ];

    this.props.updatePost(post);
  }

  render() {
    let post = this.props.posts[this.props.match.params.postid];
    if (!post) return <Redirect to="/404" />;

    let showPost = (
      <div className="Post">
        <h1>{post.title}</h1>
        <h2>{post.desc}</h2>
        <p>{post.body}</p>
        <button onClick={this.handleEdit}>Edit</button>
        <button onClick={() => this.handleDelete(post.id)}>Delete</button>
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
          {post.comments.map((comment, idx) => (
            <Comment
              key={post.id}
              comment={comment}
              deleteComment={() => this.deleteComment(idx)}
            />
          ))}
        </div>
      </div>
    );

    //if its in edit mode, show the form. otherwise show the post
    if (!this.state.edit) {
      return showPost;
    } else {
      return (
        <Form
          post={post}
          history={this.props.history}
          updateBlogPost={this.props.updateBlogPost}
          handleEdit={this.handleEdit}
        />
      );
    }
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(
  mapStateToProps,
  { addPost, updatePost, deletePost }
)(Post);
