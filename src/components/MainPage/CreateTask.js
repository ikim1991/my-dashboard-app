import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

const mapStateToProps = (state) => {
  return{

  }
}

const mapDispatchToProps = (dispatch) => {
  return{

  }
}

function CreateTask(props){
  return(
    <div className="task-create bg-dark">
      <div className="task-create-buttons">
        <button type="button" className="btn btn-dark">X</button>
      </div>
      <div className="task-description text-light">
        <h6>To Do:</h6>
        <textarea className="border border-dark" rows="6"></textarea>
        <h6>Deadline:</h6>
        <input type="date" defaultValue={moment(new Date()).format('YYYY-MM-DD')}/>
      </div>
      <div className="create-task">
        <button type="button" className="btn btn-secondary">Create Task</button>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTask);
