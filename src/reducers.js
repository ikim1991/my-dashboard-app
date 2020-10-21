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
      return Object.assign({}, state, { error: action.payload, pending: false })
    case "OPEN_WINDOW":
      return Object.assign({}, state, { createWindow: true })
    case "CLOSE_WINDOW":
      return Object.assign({}, state, { createWindow: false })
    case "LOGOUT_SUCCESS":
      return Object.assign({}, state, initialToDoList)
    default:
      return state
  }
}

const initialStockTickers = {
  tickers: [
    { symbol: "",
    market: ""
    },
    { symbol: "",
    market: ""
    },
    { symbol: "",
    market: ""
    },
    { symbol: "",
    market: ""
    },
    { symbol: "",
    market: ""
    },
    { symbol: "",
    market: ""
    },
    { symbol: "",
    market: ""
    },
    { symbol: "",
    market: ""
    },
  ],
  tickerData: [],
  news: [],
  pending: false,
  editMode: false,
  len: 8,
  error: ""
}

export const updateStockTickers = (state = initialStockTickers, action={}) => {
  switch(action.type){
    case "TICKER_PENDING":
      return Object.assign({}, state, { pending: true})
    case "TICKER_SUCCESS":
      return Object.assign({}, state, { pending: false, tickers: action.payload.tickers, tickerData: action.payload.tickerData, news: action.payload.news, len: (8 - action.payload.tickers.length) })
    case "TICKER_ERROR":
      return Object.assign({}, state, { pending: false, error: action.payload })
    case "EDIT_MODE_ON":
      return Object.assign({}, state, { editMode: true })
    case "EDIT_MODE_OFF":
      return Object.assign({}, state, { editMode: false })
      case "LOGOUT_SUCCESS":
        return Object.assign({}, state, initialStockTickers)
    default:
      return state
  }
}

const initialJobPostings = {
  postings: [],
  pending: false,
  error: ""
}

export const updateJobPostings = (state = initialJobPostings, action={}) => {
  switch(action.type){
    case "JOBS_POSTINGS_PENDING":
      return Object.assign({}, state, { pending: true })
    case "JOBS_POSTINGS_SUCCESS":
      return Object.assign({}, state, { pending: false, postings: action.payload.postings })
    case "JOBS_POSTINGS_ERROR":
      return Object.assign({}, state, { pending: false, error: action.payload })
    case "LOGOUT_SUCCESS":
        return Object.assign({}, state, initialJobPostings)
    default:
      return state
  }
}
