const initialLoginStatusState = {
  user: {
    name: "",
    email: "",
  },
  isPending: false,
  error: ""
}

export const loginStatus = (state = initialLoginStatusState, action={}) => {
  switch(action.type){
    case "LOGIN_PENDING":
      return Object.assign({}, state, { isPending: true, loggedIn: false })
    case "LOGIN_SUCCESS":
      return Object.assign({}, state, { isPending: false, user: action.payload, loggedIn: true })
    case "REGISTER_PENDING":
      return Object.assign({}, state, { isPending: true, loggedIn: false })
    case "REGISTER_SUCCESS":
      return Object.assign({}, state, { isPending: false, user: action.payload, loggedIn: true })
    case "REGISTER_ERROR":
      return Object.assign({}, state, { error: action.payload.error, isPending: false, loggedIn: false })
    case "LOGIN_ERROR":
      return Object.assign({}, state, { error: action.payload.error, isPending: false, loggedIn: false })
    default:
      return state
  }
}

export const initialNavigationPage = {
  navigation: "login"
}

export const navigationStatus = (state = initialNavigationPage, action={}) => {
  switch(action.type){
    case "LOGIN":
      return Object.assign({}, state, { navigation: "login" })
    case "REGISTER":
      return Object.assign({}, state, { navigation: "register" })
    case "MAIN":
      return Object.assign({}, state, { navigation: "main" })
    default:
      return state
  }
}
