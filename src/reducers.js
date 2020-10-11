const initialLoginStatusState = {
  user: {
    name: "",
    email: ""
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
    default:
      return state
  }
}
