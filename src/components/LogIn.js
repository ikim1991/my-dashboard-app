import React from 'react';
import './css/LogIn.css';
import { connect } from 'react-redux';
import { userLogin, navigateToRegister, navigateToMain } from '../actions';
import { validateLoginForm, clearLoginForm } from './scripts/scripts';

const mapStateToProps = (state) => {
  return{
    error: state.loginStatus.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onUserLogin: (credentials) => {
      dispatch(userLogin(credentials))
    },
    onNavigateToRegister: () => {
      dispatch(navigateToRegister())
    },
    onNavigateToMain: () => {
      dispatch(navigateToMain())
    }
  }
}


function LogIn(props){

  const { onUserLogin, onNavigateToRegister, onNavigateToMain } = props

  const onLogin = (e) => {
    e.preventDefault()
    e.target.disabled = true

    const credentials = Array.from(document.querySelectorAll(".login-main input")).map(target => target.value)

    if(credentials[0].length > 0 && credentials[1].length > 0){
      onUserLogin(credentials)
      clearLoginForm()
      onNavigateToMain()
    }else {
      validateLoginForm()
    }

    e.target.disabled = false
  }

  return(
    <div className="login bg-dark">
      <div className="login-container border border-light center text-light">
        <div className="login-header">
          <h2>Log In Form</h2>
        </div>
        <div className="login-main">
          <form id="login-form">
            <div className="form-group">
              <label>Email address</label>
              <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Password"/>
            </div>
            <div className="login-buttons">
              <button type="submit" className="btn btn-secondary" onClick={onLogin}>Login</button>
              <button type="button" className="btn btn-secondary" onClick={onNavigateToRegister}>Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
