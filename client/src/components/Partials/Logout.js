import React, { Component } from 'react'
import { logoutUser } from '../../actions/auth'
import { connect } from 'react-redux'


class Logout extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }


  handleFormSubmit(evt) {
    evt.preventDefault()
    this.props.logoutUser(this.state)
  }

  render() {
    return (
      <button onClick={this.handleFormSubmit}>
      logout
      </button>
    )
  }
  
}

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
  logoutUser: (user) => dispatch(logoutUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Logout)
