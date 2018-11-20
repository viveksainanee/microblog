import React, { Component } from 'react';
import BlogCard from '../components/BlogCard';
import { connect } from 'react-redux';
import { getTitlesFromAPI } from '../actions';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  async componentDidMount() {
    await this.props.getTitlesFromAPI();
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return 'loading....';
    }
    let titles = [];
    //for every post in the post object, create a blogcard
    Object.keys(this.props.titles).map(postKey => {
      return titles.push(
        <BlogCard
          {...this.props.titles[postKey]}
          key={this.props.titles[postKey].id}
        />
      );
    });

    return (
      <div className="Home">
        <p>
          Welcome to Microblog, our innovative site for communicating on the
          information superhighway.
        </p>
        <div>{titles}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { titles: state.titles };
}

export default connect(
  mapStateToProps,
  { getTitlesFromAPI }
)(Home);
