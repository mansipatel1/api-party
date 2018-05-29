import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import './Spotify.css'
import SpotifyUser from './SpotifyUser'

class Github extends Component {
  state = {
    username: '',
  }

  handleChange = (ev) => {
    this.setState({ username: ev.target.value })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.history.push(`/spotify/${this.state.username}`)
    this.setState({ username: '' })
  }

  render() {
    return (
      <div className="Spotify">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/500px-Spotify_logo_with_text.svg.png"
          alt="Spotify"
        />
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">Look up Spotify user</button>
          </div>
        </form>
        <Route path="/spotify/:username" component={SpotifyUser} />
        <Route exact path="/spotify" render={() => <h3>Please enter a username to search on Spotify.</h3>} />
      </div>
    )
  }
}

export default Github