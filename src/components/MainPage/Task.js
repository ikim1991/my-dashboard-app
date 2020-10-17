import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return{

  }
}

const mapDispatchToProps = (dispatch) => {
  return{

  }
}

function Task(props){

  

  return(
    <div className="task border border-secondary text-light">
      <p className="description">TASK 1</p>
      <button type="button" className="task-delete btn btn-dark">X</button>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Task);
