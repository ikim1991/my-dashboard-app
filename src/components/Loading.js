import React from 'react';
import Loader from 'react-loader-spinner'

function Loading(){
  return(
    <div className="loading bg-dark">
      <div className="spinner">\
        <Loader
           type="ThreeDots"
           color="#00BFFF"
           height={100}
           width={100}
        />
      </div>
      <div className="loading-message">
        <h4>May Take a Few Seconds to Load...</h4>
      </div>
    </div>
  )
}

export default Loading;
