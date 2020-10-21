import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return{
    news: state.updateStockTickers.news
  }
}

const mapDispatchToProps = (dispatch) => {
  return{

  }
}

function News(props){

  const { news } = props

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

export default connect(mapStateToProps, mapDispatchToProps)(News);
