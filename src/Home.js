import React, { Component } from 'react';
import BlogCard from './BlogCard';

class Home extends Component {
  render() {
    let posts = this.props.posts.map(post => (
      <BlogCard {...post} key={post.id} />
    ));
    return (
      <div className="Home">
        <p>
          Welcome to Microblog, our innovative site for communicating on the
          information superhighway.
        </p>
        <div>{posts}</div>
      </div>
    );
  }
}

export default Home;
