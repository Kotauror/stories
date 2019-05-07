import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../Api'


class Story extends Component {
  constructor() {
    super();
    this.state = {
      story: null,
      dataLoaded: false
    }
  }

  componentDidMount() {
    api.makeRequest('GET',`/api/stories/${this.props.match.params.id}`)
    .then(response => {
      this.setState({
        story: response.data,
        dataLoaded: true
      })
    })
  }

  renderStory() {
    const story = this.state.story;
    if (this.state.dataLoaded) {
      return (
        <div>
          <p className="quote">"{story.title}"</p>
          <p className="author">-{story.author}</p>
        </div>
      )
    }
    else {
      return (
        <p>Loading...</p>
      )
    }
  }

  render() {
    return (
      <div className="Quote">
        <h3>I like this story in particular</h3>
        {this.renderStory()}
        <Link to="/">Back to Stories</Link>
      </div>
    )
  }
}

export default Story;