import React from 'react';
import { connect } from 'react-redux';
import { getPostingsData } from '../../actions';
import Loader from 'react-loader-spinner';

const mapStateToProps = (state) => {
  return{
    postings: state.updateJobPostings.postings,
    postingsPending: state.updateJobPostings.postingsPending
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onGetPostingsData: () => {
      dispatch(getPostingsData())
    }
  }
}

function Main(props){

  const { postings, onGetPostingsData, postingsPending } = props

  if(postingsPending){
    return(
      <div className="main bg-secondary d-inline-block">
        <div className="main-loader">
          <Loader
             type="Circles"
             color="#00BFFF"
             height={100}
             width={100}
          />
        </div>
      </div>
    )
  }else{
    return(
      <div className="main bg-secondary d-inline-block">
        <div className="main-refresh"><button type="button" className="btn btn-dark" onClick={onGetPostingsData}>Refresh</button></div>
        {
          postings.map((posting, index) => {
            return(
              <div className="main-listing border border-dark text-light" key={index}>
                <div><a className="listing-link text-light" href={posting.link} target="_blank" rel="noopener noreferrer">{posting.title}</a></div>
                <div>{posting.company}</div>
                <div>{posting.location}</div>
                <div>{posting.summary}</div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
