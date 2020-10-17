import React from 'react';
import MainPage from './components/MainPage';
import LogIn from './components/LogIn';
import Register from './components/Register';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const mapStateToProps = (state) => {
  return{
    navigation: state.navigationStatus.navigation
  }
}

const mapDispatchToProps = (dispatch) => {
  return{

  }
}

function App(props) {
  const { navigation } = props

  switch(navigation){
    case "login":
      return(
        <div className="App">
          <LogIn/>
        </div>
      )
    case "register":
      return(
        <div className="App">
          <Register/>
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
