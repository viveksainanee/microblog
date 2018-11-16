import React, { Component } from 'react';

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
        comments: []
        // id: uuid()
      };
    }
    this.handleChange = this.handleChange.bind(this);
    this.savePostDetails = this.savePostDetails.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  savePostDetails() {
    this.props.handleSave(this.state);
  }

  render() {
    return (
      <form>
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
        <button onClick={this.savePostDetails}>Save</button>
        <button onClick={this.props.handleCancel}>Cancel</button>
      </form>
    );
  }
}

export default Form;
