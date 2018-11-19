import React, { Component } from 'react';
import uuid from 'uuid/v4';
import { connect } from 'react-redux';
import { addPost, updatePost } from '../actions';
import Form from './Form';

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleCancel() {
    //return to home
    this.props.history.push('/');
  }

  handleSave(post) {
    // If its a new post, create a post
    this.props.addPost({ ...post, id: uuid() });
    //redirect user to the homepage
    this.props.history.push('/');
  }

  render() {
    return (
      <Form handleCancel={this.handleCancel} handleSave={this.handleSave} />
    );
  }
}

export default connect(
  null,
  {
    addPost,
    updatePost
  }
)(NewPost);
