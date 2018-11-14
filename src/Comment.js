import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Comment extends Component {
  render() {
    return (
      <div className="Comment">
        <p>{this.props.comment}</p>
        <button onClick={this.deleteComment}>X</button>
      </div>
    );
  }
}

export default Comment;
