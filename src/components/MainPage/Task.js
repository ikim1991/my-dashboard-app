import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { completeTask, deleteTask } from '../../actions';

const mapStateToProps = (state) => {
  return{
    tasks: state.toDoListStatus.tasks
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onCompleteTask: (id) => {
      dispatch(completeTask(id))
    },
    onDeleteTask: (id) => {
      dispatch(deleteTask(id))
    }
  }
}

function Task(props){

  const { onCompleteTask, onDeleteTask, tasks } = props

  const onComplete = (id) => {
    onCompleteTask(id)
  }

  const onDelete = (id) => {
    onDeleteTask(id)
  }

  return tasks.map((task, index) => {
    if(!task.completed){
      return(
        <div className="task border border-secondary text-light" key={index}>
          <div className="description" onClick={() => onComplete(task._id)}>
            <p>{`${task.description}`}</p>
            <p>{`Complete By: ${moment(task.deadline).format("YYYY-MM-DD")}`}</p>
          </div>
          <div className="task-delete" onClick={() => onDelete(task._id)}>
            <div>X</div>
          </div>
        </div>
      )
    }else{
      return(
        <div className="task border border-secondary text-light" key={index}>
          <div className="description completed" onClick={() => onComplete(task._id)}>
            <p>{`${task.description}`}</p>
            <p>{`Complete By: ${moment(task.deadline).format("YYYY-MM-DD")}`}</p>
          </div>
          <div className="task-delete" onClick={() => onDelete(task._id)}>
            <div>X</div>
          </div>
        </div>
      )
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Task);
