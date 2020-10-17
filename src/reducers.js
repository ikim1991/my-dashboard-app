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
      return Object.assign({}, state, { isPending: true })
    case "LOGIN_SUCCESS":
      return Object.assign({}, state, { isPending: false, user: action.payload })
    case "REGISTER_PENDING":
      return Object.assign({}, state, { isPending: true })
    case "REGISTER_SUCCESS":
      return Object.assign({}, state, { isPending: false, user: action.payload })
    case "REGISTER_ERROR":
      return Object.assign({}, state, { error: action.payload, isPending: false })
    case "LOGIN_ERROR":
      return Object.assign({}, state, { error: action.payload, isPending: false })
    case "LOGOUT_PENDING":
      return Object.assign({}, state, { isPending: true })
    case "LOGOUT_SUCCESS":
      return Object.assign({}, state, initialLoginStatusState)
    case "LOGOUT_ERROR":
      return Object.assign({}, state, { error: action.payload, isPending: false })
    default:
      return state
  }
}

const initialNavigationPage = {
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

const initialToDoList = {
  tasks: [],
  pending: false,
  error: "",
  createWindow: false
}

export const toDoListStatus = (state = initialToDoList, action={}) => {
  switch(action.type){
    case "TASK_PENDING":
      return Object.assign({}, state, { pending: true })
    case "CREATE_TASK":
      return Object.assign({}, state, { tasks: action.payload, pending: false })
    case "GET_TASKS":
      return Object.assign({}, state, { tasks: action.payload, pending: false })
    case "COMPLETE_TASK":
      return Object.assign({}, state, { tasks: action.payload, pending: false })
    case "DELETE_TASK":
      return Object.assign({}, state, { tasks: action.payload, pending: false })
    case "TASK_ERROR":
      return Object.assign({}, state, { error: action.payload.error, isPending: false })
    case "OPEN_WINDOW":
      return Object.assign({}, state, { createWindow: true })
    case "CLOSE_WINDOW":
      return Object.assign({}, state, { createWindow: false })
    default:
      return state
  }
}
