import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class BlogCard extends Component {
  render() {
    return (
      <div className="BlogCard">
        {/* ID refers to the Posts UUID */}
        <NavLink to={`/${this.props.id}`}>
          <h3>{this.props.title}</h3>
        </NavLink>
        <p>{this.props.body}</p>
      </div>
    );
  }
}

export default BlogCard;
