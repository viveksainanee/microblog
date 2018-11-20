import React, { Component } from 'react';
import Form from './Form';
import Comment from '../components/Comment';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  addPost,
  updatePost,
  deletePost,
  addComment,
  deleteComment,
  getPostFromAPI
} from '../actions';
import uuid from 'uuid/v4';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      edit: false,
      comment: ''
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAddComment = this.handleAddComment.bind(this);
    this.handleDeleteComment = this.handleDeleteComment.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  // HANDLER FUNCTIONS /////////////////////////

  handleEdit() {
    this.setState({ edit: !this.state.edit });
  }

  handleDelete(id) {
    // dispatches an action two remove post
    this.props.deletePost(id);
    this.props.history.replace('/');
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleAddComment(evt) {
    evt.preventDefault();
    //send all post details to redux store
    let comment = {
      text: this.state.comment,
      id: uuid(),
      postID: this.props.match.params.postid
    };
    this.props.addComment(comment);
    this.setState({ comment: '' });
  }

  handleDeleteComment(id) {
    //removes the comment from the array of comments
    this.props.deleteComment({ id, postID: this.props.match.params.postid });
  }

  handleCancel() {
    //if editing, return them back to the view post page
    this.handleEdit();
  }

  handleSave(post) {
    this.props.updatePost({ ...post });
    //flip boolean value to return to the view post page
    this.handleEdit();
  }

  async componentDidMount() {
    await this.props.getPostFromAPI(this.props.match.params.postid);
    this.setState({
      loading: false
    });
  }

  render() {
    // If URL paramter doesn't match a postID, redirect to 404 page
    // let post = this.props.post[this.props.match.params.postid];
    // if (!post) return <Redirect to="/404" />;

    if (this.state.loading) {
      return 'Loading...';
    }

    let showPost = (
      <div className="Post">
        <h1>{this.props.post.title}</h1>
        <h2>{this.props.post.desc}</h2>
        <p>{this.props.post.body}</p>
        <button onClick={this.handleEdit}>Edit</button>
        <button onClick={() => this.handleDelete(this.props.post.id)}>
          Delete
        </button>

        {/* This is the comments section */}
        <div className="Post-commments">
          <h3> Comments</h3>

          <form onSubmit={this.handleAddComment}>
            <input
              onChange={this.handleChange}
              name="comment"
              value={this.state.comment}
            />
            <button> Submit </button>
          </form>

          {/* This shows the list of comments */}
          {this.props.post.comments.map(comment => (
            <Comment
              key={comment.id}
              id={comment.id}
              comment={comment.text}
              deleteComment={this.handleDeleteComment}
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
          post={this.props.post}
          history={this.props.history}
          handleEdit={this.handleEdit}
          handleSave={this.handleSave}
          handleCancel={this.handleCancel}
        />
      );
    }
  }
}

function mapStateToProps(state) {
  return { post: state.post };
}

export default connect(
  mapStateToProps,
  {
    addPost,
    updatePost,
    deletePost,
    addComment,
    deleteComment,
    getPostFromAPI
  }
)(Post);
