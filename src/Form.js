import React, { Component } from 'react';
import uuid from 'uuid/v4';
import { connect } from 'react-redux';
import { addPost, updatePost } from './actions';

class Form extends Component {
  constructor(props) {
    super(props);
    if (this.props.post) {
      // In edit mode, we pass in the post and set initial state as post
      this.state = {
        title: this.props.post.title,
        desc: this.props.post.desc,
        body: this.props.post.body,
        id: this.props.post.id,
        comments: this.props.post.comments
      };
    } else {
      this.state = {
        title: '',
        desc: '',
        body: '',
        comments: [],
        id: uuid()
      };
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    if (this.props.post) {
      this.props.updatePost(this.state);
    } else {
      this.props.addPost(this.state);
    }
    this.props.history.push('/');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <label htmlFor="desc">Description</label>
        <input
          type="text"
          name="desc"
          value={this.state.desc}
          onChange={this.handleChange}
        />
        <label htmlFor="body">Body</label>
        <textarea
          name="body"
          value={this.state.body}
          onChange={this.handleChange}
        />
        <button>Save</button>

        <button onClick={this.props.handleEdit}>Cancel</button>
      </form>
    );
  }
}

export default connect(
  null,
  {
    addPost,
    updatePost
  }
)(Form);
