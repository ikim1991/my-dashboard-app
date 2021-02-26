import React, { useEffect } from 'react';
import MainPage from './components/MainPage';
import LogIn from './components/LogIn';
import Register from './components/Register';
import Loading from './components/Loading';
import { connect } from 'react-redux';
import { refreshPage, navigateToMain } from './actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './App.css';

const mapStateToProps = (state) => {
  return{
    navigation: state.navigationStatus.navigation,
    loginPending: state.loginStatus.loginPending,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onRefreshPage: () => {
      console.log("ON REFRESH")
      dispatch(refreshPage())
    },
    onNavigateToMain: () => {
      dispatch(navigateToMain())
    }
  }
}

function App(props) {
  const { navigation, loginPending, onRefreshPage } = props
  

  useEffect(() => {
    if(sessionStorage.token){
      onRefreshPage()
    }
  }, [onRefreshPage])

  switch(navigation){
    case "login":
      return(
        <div className="App">
          {(loginPending) ? (<Loading/>) : (<LogIn/>)}
        </div>
      )
    case "register":
      return(
        <div className="App">
          {(loginPending) ? (<Loading/>) : (<Register/>)}
        </div>
      )
    case "main":
      return(
        <div className="App">
          <MainPage/>
        </div>
      )
    default:
      return(
        <div className="App">
          <LogIn/>
        </div>
      )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
