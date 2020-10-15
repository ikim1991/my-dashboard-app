const initialLoginStatusState = {
  user: {
    name: "",
    email: "",
  },
  loggedIn: false,
  token: "",
  isPending: false,
  error: ""
}

export const loginStatus = (state = initialLoginStatusState, action={}) => {
  switch(action.type){
    case "LOGIN_PENDING":
      return Object.assign({}, state, { isPending: true })
    case "LOGIN_SUCCESS":
      return Object.assign({}, state, { isPending: false, user: action.payload.user, loggedIn: true, token: action.payload.token })
    case "LOGIN_ERROR":
      return Object.assign({}, state, { error: action.payload.error, isPending: false })
    default:
      return state
  }
}

const initialRegisterCredentials = {
  isPending: false,
  error: ""
}

export const registerCredentials = (state = initialRegisterCredentials, action={}) => {
  switch(action.type){
    case "REGISTER_PENDING":
      return Object.assign({}, state, { isPending: true })
    case "REGISTER_SUCCESS":
      return Object.assign({}, state, { isPending: false })
    case "REGISTER_ERROR":
      return Object.assign({}, state, { error: action.payload.error, isPending: false })
    default:
      return state
  }
}
