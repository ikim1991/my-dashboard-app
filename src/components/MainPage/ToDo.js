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

function ToDo(props){
  return(
    <div className="todo bg-dark d-inline-block">
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
