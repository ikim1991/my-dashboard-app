export const userLogin = (credentials) => (dispatch) => {
  dispatch({type: "LOGIN_PENDING"})
  fetch(`${process.env.REACT_APP_BACKEND_URL}users/login`, {
    method: 'post',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      email: credentials[0],
      password: credentials[1]
    })
  })
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => dispatch({ type: "LOGIN_ERROR", payload: error}))
}

export const registerUser = (credentials) => (dispatch) => {
  dispatch({type: "REGISTER_PENDING"})
  fetch(`${process.env.REACT_APP_BACKEND_URL}users`, {
    method: 'post',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      email: credentials[0],
      name: credentials[1],
      password: credentials[2]
     })
  })
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => dispatch({ type: "REGISTER_ERROR", payload: error}))
}

export const navigateToLogin = () => ({type: "LOGIN"})
export const navigateToRegister = () => ({type: "REGISTER"})
export const navigateToMain = () => ({type: "MAIN"})
