import React, { Component } from 'react';
import BlogCard from '../components/BlogCard';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    let posts = [];
    //for every post in the post object, create a blogcard
    for (let postKey in this.props.posts) {
      posts.push(
        <BlogCard
          {...this.props.posts[postKey]}
          key={this.props.posts[postKey].id}
        />
      );
    }

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

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps)(Home);
