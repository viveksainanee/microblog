import React, { Component } from 'react';

class Comment extends Component {
  render() {
    return (
      <div className="Comment">
        <p>{this.props.comment}</p>
        <button onClick={this.props.deleteComment}>X</button>
      </div>
    );
  }
}

export default Comment;
