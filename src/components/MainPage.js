import React from 'react';
import './MainPage/css/MainPage.css';
import './MainPage/Header';
import Header from './MainPage/Header';
import StockTicker from './MainPage/StockTicker';
import News from './MainPage/News';
import Main from './MainPage/Main';
import ToDo from './MainPage/ToDo';

class MainPage extends React.Component{
  render(){
    return(
      <div className="main-page bg-secondary">
        <Header/>
        <StockTicker/>
        <News/>
        <Main/>
        <ToDo/>
      </div>
    )
  }
}

export default MainPage;
