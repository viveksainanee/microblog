import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      desc: '',
      body: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.post) {
      this.setState({
        title: this.props.post.title,
        desc: this.props.post.desc,
        body: this.props.post.body
      });
    }
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.newBlogPost(this.state);
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
        <NavLink to="/">
          <button>Cancel</button>
        </NavLink>
      </form>
    );
  }
}

export default Form;
