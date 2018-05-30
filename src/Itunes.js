import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import './Itunes.css'
import ItunesInfo from './ItunesInfo'

class Itunes extends Component {
  state = {
    song: '',
  }

  handleChange = (ev) => {
    this.setState({ song: ev.target.value })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.history.push(`/itunes/${this.state.song}`)
    this.setState({ song: '' })
  }

  render() {
    return (
      <div className="Itunes">
        <img
          className="logo"
          src="http://pluspng.com/img-png/itunes-png-itunes-logo-png-680.png"
          alt="Itunes"
        />
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text" placeholder="Type Song Title Here" className="input"
              value={this.state.song}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">Look up a song </button>
          </div>
        </form>
        <Route path="/itunes/:song" component={ItunesInfo} />
        <Route exact path="/itunes" render={() => <h3>Please enter a song to search on iTunes.</h3>} />
      </div>
    )
  }
}

export default Itunes