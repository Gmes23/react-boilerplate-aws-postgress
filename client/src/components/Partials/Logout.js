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
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
  }

  handleLogoutClick(e) {
    e.preventDefault()
    this.props.logoutUser(this.state)
  }

  render() {
    return (
      <button onClick={this.handleLogoutClick}>
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
