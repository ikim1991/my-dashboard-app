import React from 'react';
import './css/Register.css';
import { connect } from 'react-redux';
import { registerUser, navigateToLogin } from '../actions';
import { validateRegisterForm, clearRegisterForm } from './scripts/scripts';

const mapStateToProps = (state) => {
  return{

  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onRegisterUser: (credentials) => {
      dispatch(registerUser(credentials))
    },
    onNavigateToLogin: () => {
      dispatch(navigateToLogin())
    }
  }
}

function Register(props){

  const { onRegisterUser, onNavigateToLogin } = props

  const onRegister = (e) => {
    e.preventDefault()
    e.target.disabled = true

    const credentials = Array.from(document.querySelectorAll(".register-main input")).map(target => target.value)

    if(credentials[0].length > 0 && credentials[1].length > 0 && credentials[2].length > 0 && credentials[3].length > 0){
      if(credentials[2] === credentials[3]){
        onRegisterUser(credentials)
        clearRegisterForm()
      }else{
        validateRegisterForm()
      }
    }else{
      validateRegisterForm()
    }
    e.target.disabled = false
  }

  return(
    <div className="register bg-dark">
      <div className="register-container border border-light center text-light">
        <div className="register-header">
          <h2>Register Form</h2>
        </div>
        <div className="register-main">
          <form id="register-form">
            <div className="form-group">
              <label>Email address</label>
              <input type="email" className="form-control" placeholder="Enter Email"/>
            </div>
            <div className="form-group">
              <label>Username</label>
              <input type="text" className="form-control" placeholder="Enter Username"/>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Password"/>
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" className="form-control" placeholder="Confirm Password"/>
            </div>
            <div className="register-buttons">
              <button type="submit" className="btn btn-secondary" onClick={onRegister}>Register</button>
              <button type="button" className="btn btn-secondary" onClick={onNavigateToLogin}>Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
