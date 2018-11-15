import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Form from '../containers/Form';
import Home from '../containers/Home';
import Post from '../containers/Post';
import ErrorPage from './ErrorPage';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Home />} />

        <Route
          exact
          path="/new"
          render={rprops => <Form {...rprops} handleEdit={this.handleEdit} />}
        />

        <Route exact path="/404" render={() => <ErrorPage />} />

        <Route path="/:postid" render={rprops => <Post {...rprops} />} />
      </Switch>
    );
  }
}

export default Routes;
