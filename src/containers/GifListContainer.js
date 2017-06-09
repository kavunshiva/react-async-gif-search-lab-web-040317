import React, { Component } from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends Component {
  constructor(){
    super()
    this.state = {
      gifs: []
    }
    this.search = this.search.bind(this)
    this.updateGifs = this.updateGifs.bind(this)
  }

  updateGifs(gifs){
    this.setState({gifs: gifs.data.slice(0,3)})
  }

  search(query){
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC`)
      .then(response => response.json())
      .then(gifs => this.updateGifs(gifs))
  }

  render() {
    return(
      <div>
        <GifList gifs={this.state.gifs} />
        <GifSearch onSubmit={this.search} />
      </div>
    )
  }
}
