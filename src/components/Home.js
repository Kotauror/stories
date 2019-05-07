import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../Api'

class Home extends Component {
  constructor() {
    super();
    this.state = {
      stories: [],
      dataLoaded: false
    }
  }

  componentDidMount() {
    api.makeRequest('GET', '/api/stories').then(response => {
      this.setState({
        stories: response.data,
        dataLoaded: true
      });
    })
  }

  renderStories() {
    if (this.state.dataLoaded) {
      return this.state.stories.map(story => {
        return (
          <div key={story.id}>
            <Link to={`/${story.id}`}>"{story.title}"</Link>
            <p>{story.title}</p>
            <p>{story.content}</p>
            <p className="author">{story.author}</p>
          </div>
        )
      })
    } else {
      <p>Loading...</p>
    }
  }

  render() {
    return (
      <div className="Home">
        {this.renderStories()}
      </div>
    )
  }
};

export default Home;
