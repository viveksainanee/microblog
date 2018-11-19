import React, { Component } from 'react';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    console.log(this.props);
  }

  handleDelete(evt) {
    this.props.deleteComment(evt.target.dataset.id);
  }

  render() {
    return (
      <div className="Comment">
        <p>{this.props.comment}</p>
        <button data-id={this.props.id} onClick={this.handleDelete}>
          X
        </button>
      </div>
    );
  }
}

export default Comment;
