import React, { Component } from 'react';
import Header from './Header';
import Routes from './Routes';

class Microblog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.newBlogPost = this.newBlogPost.bind(this);
  }

  newBlogPost(post) {
    this.setState(st => {
      return { posts: [...st.posts, post] };
    });
  }

  render() {
    return (
      <div className="Microblog">
        <Header />
        <Routes posts={this.state.posts} newBlogPost={this.newBlogPost} />
      </div>
    );
  }
}

export default Microblog;
