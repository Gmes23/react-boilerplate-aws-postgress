import * as TYPES from '../constants/ActionTypes'

export const setUser = (user, isAuth) => ({
  type: TYPES.SET_USER,
  user,
  isAuth
})

// i use this method before but i did not invoke the user, isAuth there the function
// however i think when the these has a user and they are auth this if the prior
// functions gets called it will clear the user
export const clearUser = () => ({
  type: TYPES.CLEAR_USER
})

export const verifyUser = () => dispatch => {
  fetch('/api/user/verify', { credentials: 'include' })
    .then(res => res.json())
    .then(({ user, isAuth }) => dispatch(setUser(user, isAuth)))
    .catch(err => console.log(err))
}

export const loginUser = ({ username, password }) => dispatch => {
  fetch('/api/user/login', {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
  .then(res => res.json())
  .then(({ user, isAuth }) => dispatch(setUser(user, isAuth)))
  .catch(err => console.log(err))
}

export const registerUser = user => dispatch => {
  fetch('/api/user/register', {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user })
  })
  .then(res => res.json())
  .then(({ user, isAuth }) => dispatch(setUser(user, isAuth)))
  .catch(err => console.log(err))
}

export const logoutUser = user => dispatch => {
  fetch('/api/user/logout', { credentials: 'include' })
  .then(res => res.json())
  //for some reason method setUser is logging the person out instead of clearUser
  // this is because i think when user is logged in it sets it to true 
  .then(({ user, isAuth }) => dispatch(setUser(user, isAuth)))
  .catch(err => console.log(err))
}



