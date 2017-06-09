import React, { Component } from 'react'

export default class GifSearch extends Component {
  constructor(){
    super()
    this.state = {
      query: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.onSubmit(event.target.query.value)
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="query" value={this.state.query} onChange={this.handleChange}/>
        <input type="submit" />
      </form>
    )
  }
}
