import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { closeWindow, createNewTask } from '../../actions';

const mapStateToProps = (state) => {
  return{

  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onCloseWindow: () => {
      dispatch(closeWindow())
    },
    onCreateNewTask: (description, deadline) => {
      dispatch(createNewTask(description, deadline))
    }
  }
}

function CreateTask(props){

  const { onCloseWindow, onCreateNewTask } = props

  const createTask = (e) => {

    e.target.disabled = true

    const description = document.querySelector(".task-description textarea").value
    const deadline = document.querySelector(".task-description input").value

    if(description.length > 0){
      onCreateNewTask(description, deadline)
    }

    e.target.disabled = false
  }


  return(
    <div className="task-create bg-dark">
      <div className="task-create-buttons">
        <button type="button" className="btn btn-dark" onClick={onCloseWindow}>X</button>
      </div>
      <div className="task-description text-light">
        <h6>To Do:</h6>
        <textarea className="border border-dark" rows="6"></textarea>
        <h6>Deadline:</h6>
        <input type="date" defaultValue={moment(new Date()).format('YYYY-MM-DD')}/>
      </div>
      <div className="create-task">
        <button type="button" className="btn btn-secondary" onClick={createTask}>Create Task</button>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTask);
