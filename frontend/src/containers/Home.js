import React, { Component } from 'react';
import BlogCard from '../components/BlogCard';
import { connect } from 'react-redux';
import { getPostsFromAPI } from '../actions';

class Home extends Component {
  componentDidMount() {
    this.props.getPostsFromAPI();
  }
  render() {
    let posts = [];
    //for every post in the post object, create a blogcard
    Object.keys(this.props.posts).map(postKey => {
      return posts.push(
        <BlogCard
          {...this.props.posts[postKey]}
          key={this.props.posts[postKey].id}
        />
      );
    });

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

export default connect(
  mapStateToProps,
  { getPostsFromAPI }
)(Home);
