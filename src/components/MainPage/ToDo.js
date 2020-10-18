import React from 'react';
import { connect } from 'react-redux';
import Task from './Task';
import CreateTask from './CreateTask';
import { openWindow } from '../../actions';

const mapStateToProps = (state) => {
  return{
    createWindow: state.toDoListStatus.createWindow
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onOpenWindow: () => {
      dispatch(openWindow())
    }
  }
}

function ToDo(props){

  const { createWindow, onOpenWindow } = props

  return(
    <div className="todo bg-dark d-inline-block">
      {(createWindow) ? (<CreateTask/>) : (<div></div>)}
      <div className="todo-add">
        <button type="button" className="btn btn-secondary" onClick={onOpenWindow}>New Task</button>
      </div>
      <Task/>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
