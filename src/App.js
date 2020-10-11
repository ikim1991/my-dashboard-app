import React from 'react';
import MainPage from './components/MainPage';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

const mapStateToProps = (state) => {
  return{
    loggedIn: state.loginStatus.loggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return{

  }
}

function App(props) {
  const { loggedIn } = props

  return (
    <div className="App">
      <MainPage/>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
