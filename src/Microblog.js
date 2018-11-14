import React, { Component } from 'react';
import Header from './Header';
import Routes from './Routes';

class Microblog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.updateBlogPost = this.updateBlogPost.bind(this);
    this.deleteBlogPost = this.deleteBlogPost.bind(this);
  }

  updateBlogPost(post) {
    this.setState(st => {
      return { posts: [...st.posts, post] };
    });
  }

  deleteBlogPost(title) {
    let idx = this.state.posts.findIndex(post => post.title === title);

    this.setState(st => ({
      posts: [
        ...st.posts.slice(0, idx),
        ...st.posts.slice(idx + 1, st.posts.length)
      ]
    }));
  }

  render() {
    return (
      <div className="Microblog">
        <Header />
        <Routes
          posts={this.state.posts}
          updateBlogPost={this.updateBlogPost}
          deleteBlogPost={this.deleteBlogPost}
        />
      </div>
    );
  }
}

export default Microblog;
