import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { userLogOut } from '../../actions';

const mapStateToProps = (state) => {
  return{
    user: state.loginStatus.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onUserLogOut: () => {
      dispatch(userLogOut())
    }
  }
}

function Header(props){

  const { user, onUserLogOut } = props

  const loggingOut = (e) => {
    e.target.disabled = true

    onUserLogOut()

    e.target.disabled = false
  }

  const [time, setTime] = useState(new Date())
  useEffect(() => {
    const myTimer = () =>{
      setTime(new Date())
    }
    let timer = setInterval(myTimer, 30000)

    return () => {
      clearInterval(timer)
    }
  }, [time])

  return(
    <div className="header bg-dark">
      <div className="title h2 text-light font-weight-bold d-flex align-items-center">{`Hello ${user.name}! It is ${moment(time).format('LLLL')}`}</div>
      <div className="logout">
        <button type="button" className="btn btn-dark" onClick={loggingOut}>LOGOUT</button>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
