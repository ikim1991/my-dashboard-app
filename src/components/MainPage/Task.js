import React from 'react';
import moment from 'moment';

function Task(props){

  const { description, deadline, key } = props


  return(
    <div className="task border border-secondary text-light" key={key}>
      <div className="description">
        <p>{`${description}`}</p>
        <p>{`Complete By: ${moment(deadline).format("YYYY-MM-DD")}`}</p>
      </div>
      <div className="task-delete">
        <div>X</div>
      </div>
    </div>
  )
}

export default Task;
