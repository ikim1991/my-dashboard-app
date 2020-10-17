import React from 'react';
import { connect } from 'react-redux';
import Task from './Task';
import CreateTask from './CreateTask';

const mapStateToProps = (state) => {
  return{

  }
}

const mapDispatchToProps = (dispatch) => {
  return{

  }
}

function ToDo(props){
  return(
    <div className="todo bg-dark d-inline-block">
      <CreateTask/>
      <div className="todo-add">
        <button type="button" className="btn btn-secondary">New Task</button>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
