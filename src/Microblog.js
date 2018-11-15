import React, { Component } from 'react';
import Header from './Header';
import Routes from './Routes';

class Microblog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.addBlogPost = this.addBlogPost.bind(this);
    this.updateBlogPost = this.updateBlogPost.bind(this);
    this.deleteBlogPost = this.deleteBlogPost.bind(this);
  }

  addBlogPost(post) {
    this.setState(st => {
      return { posts: [...st.posts, post] };
    });
  }

  updateBlogPost(post) {
    let oldPosts = this.state.posts.filter(oldPost => oldPost.id !== post.id);
    this.setState(st => {
      return { posts: [...oldPosts, post] };
    });
  }

  deleteBlogPost(id) {
    let idx = this.state.posts.findIndex(post => post.id === id);

    this.setState(st => ({
      posts: [...st.posts.slice(0, idx), ...st.posts.slice(idx + 1)]
    }));
  }

  render() {
    return (
      <div className="Microblog">
        <Header />
        <Routes
          posts={this.state.posts}
          updateBlogPost={this.updateBlogPost}
          addBlogPost={this.addBlogPost}
          deleteBlogPost={this.deleteBlogPost}
        />
      </div>
    );
  }
}

export default Microblog;
