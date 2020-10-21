import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

const mapStateToProps = (state) => {
  return{
    news: state.updateStockTickers.news,
    tickerPending: state.updateStockTickers.tickerPending
  }
}

function News(props){

  const { news, tickerPending } = props

  if(tickerPending){
    return(
      <div className="news bg-dark d-inline-block text-light">
        <div className="news-loader">
          <Loader
             type="Bars"
             color="#00BFFF"
             height={100}
             width={100}
          />
        </div>
      </div>
    )
  }else{
    return(
      <div className="news bg-dark d-inline-block text-light">
        {news.map((el, index) => {
          return(
            <div className="news-story border border-secondary" key={index}>
              <div><a className="text-light" href={el.link} target="_blank" rel="noopener noreferrer">{el.title}</a></div>
              <div>{el.date}</div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default connect(mapStateToProps)(News);
