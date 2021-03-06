export const navigateToLogin = () => ({type: "LOGIN"})
export const navigateToRegister = () => ({type: "REGISTER"})
export const navigateToMain = () => ({type: "MAIN"})
export const openWindow = () => ({type: "OPEN_WINDOW"})
export const closeWindow = () => ({type:"CLOSE_WINDOW"})
export const editModeOn = () => ({type: "EDIT_MODE_ON"})
export const editModeOff = () => ({type: "EDIT_MODE_OFF"})

export const userLogin = (credentials) => (dispatch) => {
  dispatch({type: "LOGIN_PENDING"})
  dispatch({type: "TASK_PENDING"})
  dispatch({type: "TICKER_PENDING"})
  dispatch({type: "JOBS_POSTINGS_PENDING"})
  fetch(`${'https://ikim91-my-dashboard.herokuapp.com/'}users/login`, {
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
  .then(data => {
    dispatch({type: "LOGIN_SUCCESS", payload: { name: data.user.name, email: data.user.email }})
    dispatch({type: "GET_TASKS", payload: data.tasks})
    dispatch({type: "TICKER_SUCCESS", payload: data.tickers})
    dispatch({type: "JOBS_POSTINGS_SUCCESS", payload: data.postings})
    sessionStorage.token = data.token
  })
  .then(() => dispatch({type: "MAIN"}))
  .catch(error => {
    dispatch({ type: "LOGIN_ERROR", payload: error })
    dispatch({ type: "TASK_ERROR", payload: error })
    dispatch({ type: "TICKER_ERROR", payload: error })
    dispatch({ type: "JOBS_POSTINGS_ERROR", payload: error })
  })
}

export const registerUser = (credentials) => (dispatch) => {
  dispatch({type: "REGISTER_PENDING"})
  fetch(`${'https://ikim91-my-dashboard.herokuapp.com/'}users`, {
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
  .then(data => {
    dispatch({type: "REGISTER_SUCCESS", payload: { name: data.user.name, email: data.user.email }})
    sessionStorage.token = data.token
  })
  .then(() => dispatch({type: "MAIN"}))
  .catch(error => {
    dispatch({ type: "REGISTER_ERROR", payload: error})
    dispatch({ type: "TASK_ERROR", payload: error })
    dispatch({ type: "TICKER_ERROR", payload: error })
    dispatch({ type: "JOBS_POSTINGS_ERROR", payload: error })
  })
}

export const userLogOut = () =>(dispatch) => {
  dispatch({ type: "LOGOUT_PENDING" })
  fetch(`${'https://ikim91-my-dashboard.herokuapp.com/'}users/logoutall`, {
    method: "post",
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.token
    }
  })
  .then(() => {
    sessionStorage.clear()
  })
  .then(() => {
    dispatch({ type: "LOGOUT_SUCCESS" })
  })
  .then(() => dispatch({ type: "LOGIN"}))
  .catch(error => dispatch({ type: "LOGOUT_ERROR", payload: error}))
}

export const createNewTask = (description, deadline) => (dispatch) => {
  dispatch({type: "TASK_PENDING"})
  fetch(`${'https://ikim91-my-dashboard.herokuapp.com/'}tasks`, {
    method: 'post',
    headers:{
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.token
    },
    body: JSON.stringify({
      description, deadline
    })
  })
  .then(res => res.json())
  .then(data => {
    dispatch({type: "CREATE_TASK", payload: data})
    dispatch({type: "CLOSE_WINDOW"})
  })
  .catch(error => dispatch({type:"TASK_ERROR", payload: error}))
}

export const completeTask = (id) => (dispatch)=> {
  dispatch({ type: "TASK_PENDING" })
  fetch(`${'https://ikim91-my-dashboard.herokuapp.com/'}tasks/${id}`, {
    method: 'post',
    headers:{
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.token
    }
  })
  .then(res => res.json())
  .then((data) => {
    dispatch({ type: "COMPLETE_TASK", payload: data })
  })
  .catch(error => dispatch({type: "TASK_ERROR", payload: error}))
}

export const deleteTask = (id) => (dispatch) => {
  dispatch({type: "TASK_PENDING" })
  fetch(`${'https://ikim91-my-dashboard.herokuapp.com/'}tasks/${id}`, {
    method: 'delete',
    headers:{
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.token
    }
  })
  .then(res => res.json())
  .then(data => {
    dispatch({type: "DELETE_TASK", payload: data})
  })
  .catch(error => dispatch({type: "TASK_ERROR", payload: error}))
}

export const updateTickerData = (tickers) => (dispatch) => {
  dispatch({type: "TICKER_PENDING"})
  fetch(`${'https://ikim91-my-dashboard.herokuapp.com/'}tickers`, {
    method: 'post',
    headers:{
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.token
    },
    body: JSON.stringify({
      tickers
    })
  })
  .then(res => res.json())
  .then(data => {
    dispatch({ type: "TICKER_SUCCESS", payload: data })
  })
  .catch(error => dispatch({type: "TICKER_ERROR", payload: error}))
}

export const getTickerData = () => (dispatch) => {
  dispatch({type: "TICKER_PENDING"})
  fetch(`${'https://ikim91-my-dashboard.herokuapp.com/'}tickers`, {
    method: 'get',
    headers:{
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.token
    }
  })
  .then(res => res.json())
  .then(data => {
    dispatch({ type: "TICKER_SUCCESS", payload: data})
  })
  .catch(error => dispatch({type: "TICKER_ERROR", payload: error}))
}

export const getPostingsData = () => (dispatch) => {
  dispatch({type: "JOBS_POSTINGS_PENDING"})
  fetch(`${'https://ikim91-my-dashboard.herokuapp.com/'}postings`, {
    method: 'get',
    headers:{
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.token
    }
  })
  .then(res => res.json())
  .then(data => {
    dispatch({type: "JOBS_POSTINGS_SUCCESS", payload: data.postings})
  })
  .catch(error => dispatch({type: "JOBS_POSTINGS_ERROR", payload: error}))
}

export const refreshPage = () => async (dispatch) => {
  dispatch({type: "LOGIN_PENDING"})
  dispatch({type: "TASK_PENDING"})
  dispatch({type: "TICKER_PENDING"})
  dispatch({type: "JOBS_POSTINGS_PENDING"})
  fetch(`${'https://ikim91-my-dashboard.herokuapp.com/'}users/me`, {
    method: 'get',
    headers:{
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.token
    }
  })
  .then(res => res.json())
  .then(data => {
    dispatch({type: "LOGIN_SUCCESS", payload: { name: data.user.name, email: data.user.email }})
    dispatch({type: "GET_TASKS", payload: data.tasks})
    dispatch({type: "TICKER_SUCCESS", payload: data.tickers})
    dispatch({type: "JOBS_POSTINGS_SUCCESS", payload: data.postings})
  })
  .then(() => {
    dispatch({type: "MAIN"})
  })
  .catch(error => {
    dispatch({ type: "LOGIN_ERROR", payload: error })
    dispatch({ type: "TASK_ERROR", payload: error })
    dispatch({ type: "TICKER_ERROR", payload: error })
    dispatch({ type: "JOBS_POSTINGS_ERROR", payload: error })
  })
}
