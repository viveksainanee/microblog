import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Form from './Form';
import Home from './Home';
import Post from './Post';
import ErrorPage from './ErrorPage';

class Routes extends Component {
  constructor(props) {
    super(props);
    this.findPost = this.findPost.bind(this);
  }

  // UTILITY FUNCTIONS /////////////////////////
  findPost(rprops) {
    return this.props.posts.filter(p => p.id === rprops.match.params.postid)[0];
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route
          exact
          path="/new"
          render={props => (
            <Form
              {...props}
              addBlogPost={this.props.addBlogPost}
              updateBlogPost={this.props.updateBlogPost}
            />
          )}
        />
        <Route exact path="/404" render={() => <ErrorPage />} />
        <Route
          path="/:postid"
          render={rprops => (
            <Post
              {...rprops}
              post={this.findPost(rprops)}
              updateBlogPost={this.props.updateBlogPost}
              deleteBlogPost={this.props.deleteBlogPost}
            />
          )}
        />
      </Switch>
    );
  }
}

export default Routes;
