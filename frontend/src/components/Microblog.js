import React, { Component } from 'react';
import Header from './Header';
import Routes from './Routes';

class Microblog extends Component {
  render() {
    return (
      <div className="Microblog">
        <Header />
        <Routes />
      </div>
    );
  }
}

export default Microblog;
