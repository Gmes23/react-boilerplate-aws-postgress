import React, { Component } from 'react'
import { connect } from 'react-redux'


/* 
    TODO
    allow admin to post to db , still need to create node route and db schema 
    this is for when the boilerplate gets change into a store boilerplate
*/ 
class Admin extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      price: '',
      summary: ''
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(evt) {
    const { name, value } = evt.target
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit(evt) {
    evt.preventDefault()
    console.log(this.state);
    // this.props.loginUser(this.state)
  }

  render() {
    const { name, price, summary } = this.state
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input 
          name="name"
          placeholder="name"
          type="text"
          onChange={this.handleInputChange}
          value={name}
        />
        <input
          name="price"
          placeholder="price"
          type="text"
          onChange={this.handleInputChange}
          value={price}
        />
        <input
          name="summary"
          placeholder="summary"
          type="text"
          onChange={this.handleInputChange}
          value={summary}
        />
        <input type="submit" value="Submit" />
      </form>
    )
  }
  
}

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
//   loginUser: (userInfo) => dispatch(loginUser(userInfo))
})

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
