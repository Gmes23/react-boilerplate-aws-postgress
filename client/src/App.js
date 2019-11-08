import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

// Partials 
import Nav from './components/Partials/Nav'
import Searchbar from './components/Partials/Searchbar'

// Auth
import Auth from './components/Auth'
import LoginForm from './components/Auth/LoginForm'
import RegisterForm from './components/Auth/RegisterForm'

// Components
import Home from './components/Home'


import { verifyUser } from './actions/auth'

class App extends Component {
  componentDidMount() {
    this.props.verifyUser()
  }

  render() {
    const {
      auth: {
        isAuth
      }
    } = this.props
    return (
      <div className="App">
        <header>
          <Nav isAuth={isAuth} />
          <Searchbar />
        </header>
        <main>
          <Route exact path="/" component={Home} />

          <Route exact path="/register" render={() => (
            <Auth isAuth={isAuth}>
              <RegisterForm />
            </Auth>
          )} />
          <Route exact path="/login" render={() => (
            <Auth isAuth={isAuth}>
              <LoginForm />
            </Auth>
          )} />
        </main>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  verifyUser: () => dispatch(verifyUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
