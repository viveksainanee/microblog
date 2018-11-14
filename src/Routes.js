import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Form from './Form';
import Home from './Home';
import Post from './Post';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Home posts={this.props.posts} />}
        />
        <Route
          exact
          path="/new"
          render={props => (
            <Form {...props} newBlogPost={this.props.newBlogPost} />
          )}
        />
        <Route
          path="/:postid"
          render={props => <Post {...props} posts={this.props.posts} />}
        />
      </Switch>
    );
  }
}

export default Routes;
