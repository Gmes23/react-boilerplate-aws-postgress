// import React, { Component } from 'react'
// import { logoutUser } from '../../actions/auth'
// import { connect } from 'react-redux'

// class Logout extends Component {
//   constructor() {
//     super()
//     this.state = {
//       username: '',
//       password: ''
//     }
//     this.handleFormSubmit = this.handleFormSubmit.bind(this)
//     this.handleInputChange = this.handleInputChange.bind(this)
//   }

//   handleInputChange(evt) {
//     const { name, value } = evt.target
//     this.setState({
//       [name]: value
//     })
//   }

//   handleFormSubmit(evt) {
//     evt.preventDefault()
//     this.props.logoutUser(this.state)
//   }

//   render() {
//     const { username, password } = this.state
//     return (
//       <form onSubmit={this.handleFormSubmit}>
//         <input 
//           name="username"
//           placeholder="username"
//           type="text"
//           onChange={this.handleInputChange}
//           value={username}
//         />
//         <input
//           name="password"
//           placeholder="password"
//           type="text"
//           onChange={this.handleInputChange}
//           value={password}
//         />
//         <input type="submit" value="Log in" />
//       </form>
//     )
//   }
  
// }

// const mapStateToProps = state => state
// const mapDispatchToProps = dispatch => ({
//   logoutUser: (userInfo) => dispatch(logoutUser(userInfo))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Logout)


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
