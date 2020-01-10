import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

// Partials 
import Nav from './components/Partials/Nav'
import Searchbar from './components/Partials/Searchbar'

// this is the store carts, this might later be moved to Partials
import StoreCart from './components/StoreCart/StoreCart'

// Admin
import Admin from './components/Admin/Admin'

// User Profile Page, All features for an Authenticated User, Purchased History, Authenticated User Cart
import UserProfilePage from './components/UserPage/UserProfilePage'

// Auth
import Auth from './components/Auth'
import LoginForm from './components/Auth/LoginForm'
import RegisterForm from './components/Auth/RegisterForm'

// Components
import Home from './components/Home'

// Actions 
import { verifyUser } from './actions/auth'

// 404 page 
import NotFound from './components/NotFound/NotFound'

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
        <div>
          <Nav isAuth={isAuth} />
          <Searchbar />
          <StoreCart />
        </div>
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

          <Route exact path="/admin" component={Admin} />

          <Route exact path="/User" component={UserProfilePage} />

          <Route component={NotFound} />

          

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
