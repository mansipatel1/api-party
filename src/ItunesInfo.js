import React, { Component } from 'react'
import './Itunes.css'

class ItunesInfo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      song: {},
    }

    this.fetchUserData(this.props)
  }

  componentWillReceiveProps(nextProps) {
    const locationChanged = nextProps.location !== this.props.location
    if (locationChanged) {
      this.fetchUserData(nextProps)
    }
  }





  fetchUserData = (props) => {
    fetch(`https://itunes.apple.com/search?term=${props.match.params.song}`)
    .then(response => response.json())
    .then(data => {
    let song = {}
    try {
    
             song = {
                    name: data.results[0].trackName,
                    artist: data.results[0].artistName,
                    album: data.results[0].collectionName,
                    image: data.results[0].artworkUrl100,
                    preview: data.results[0].previewURL,
                  }
                }
        catch(error){
                 song = {
                        name: 'None',
                        artist: null,
                        album: 'No song info.'
                     }
                    }
                    this.setState({song})
    })
}

  render() {

    const {name, artist, album,image,preview} = this.state.song
    return (
      <div className="ItunesInfo">
      <a href={preview} > 
      <img className= "image" src={image} alt="" />
      </a>
    
       <h3>Song: {name}</h3>
       <h3>Artist: {artist}</h3>
       <h3>Album: {album}</h3> 
      </div>
    )
  }
}
export default ItunesInfo