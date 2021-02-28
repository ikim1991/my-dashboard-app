import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { editModeOn, editModeOff, updateTickerData } from '../../actions';
import Loader from 'react-loader-spinner';

const mapStateToProps = (state) => {
  return{
    tickers: state.updateStockTickers.tickers,
    tickerData: state.updateStockTickers.tickerData,
    editMode: state.updateStockTickers.editMode,
    len: state.updateStockTickers.len,
    tickerPending: state.updateStockTickers.tickerPending
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onEditModeOn: () => {
      dispatch(editModeOn())
    },
    onEditModeOff: () => {
      dispatch(editModeOff())
    },
    onUpdateTickerData: (tickers) => {
      dispatch(updateTickerData(tickers))
    }
  }
}

function StockTicker(props){

  const { tickers, tickerData, editMode, len, onEditModeOn, onEditModeOff, onUpdateTickerData, tickerPending } = props

  useEffect(() => {
    const myTimer = () =>{
      if(tickerData.length > 0){
        onUpdateTickerData(tickers)
      }
    }
    let timer = setInterval(myTimer, 1200000)

    return () => {
      clearInterval(timer)
    }
  }, [onUpdateTickerData, tickerData, tickers])

  const updateStockTickerData = (e) => {
    e.disabled = true

    const tickersArray = Array.from(document.querySelectorAll("div > input.ticker-symbol")).map((target) => {
      if(target.value.length > 0 && target.nextSibling.value.length > 0){
        return {
          symbol: target.value,
          market: target.nextSibling.value
        }
      }else{
        return null
      }
    }).filter(element => element)

    onEditModeOff()
    onUpdateTickerData(tickersArray)

    e.disabled = false

  }

  const createEmptyRows = () => {
    const arr = []

    for(let i = 0; i < len; i++){
      arr.push({
        symbol: "",
        market: ""
      })
    }

    return arr
  }

  if(editMode){
    return(
      <div className="stock-ticker bg-light d-flex flex-row flex-wrap justify-content-start align-items-center">
        <div className="send-stock-data">
          <button type="button" className="send-stock-data-button-1 btn btn-info" onClick={updateStockTickerData}>Update</button>
          <button type="button" className="send-stock-data-button-2 btn btn-info" onClick={onEditModeOff}>Cancel</button>
        </div>
        {
          tickers.map((ticker, index) => {
            return(
              <div className="row-item border border-dark" key={index}>
                <input type="text" className="ticker-symbol" placeholder="Ticker Symbol..." defaultValue={ticker.symbol}/>
                <select name="market" className="markets" defaultValue={ticker.market}>
                  <option value="" className="default-market"></option>
                  <option value="TO" className="market">TSX</option>
                  <option value="VN" className="market">TSXV</option>
                  <option value="CN" className="market">CSE</option>
                  <option value="NASDAQ" className="market">Nasdaq</option>
                  <option value="NYSE" className="market">NYSE</option>
                  <option value="CRYPTO" className="market">Cryptocurrency</option>
                </select>
              </div>
            )
          })
        }
        {
          createEmptyRows().map((element, index) => {
            return(
              <div className="row-item border border-dark" key={index}>
                <input type="text" className="ticker-symbol" placeholder="Ticker Symbol..." defaultValue={element.symbol}/>
                <select name="market" className="markets" defaultValue={element.market}>
                  <option value="" className="default-market"></option>
                  <option value="TO" className="market">TSX</option>
                  <option value="VN" className="market">TSXV</option>
                  <option value="CN" className="market">CSE</option>
                  <option value="NASDAQ" className="market">Nasdaq</option>
                  <option value="NYSE" className="market">NYSE</option>
                  <option value="CRYPTO" className="market">Cryptocurrency</option>
                </select>
              </div>
            )
          })
        }
      </div>
    )
  }else{
    return(
      <div className="stock-ticker bg-light d-flex flex-row flex-wrap justify-content-start align-items-center">
        {
          tickerData.map((ticker, index) => {
            if(tickerPending){
              return(
                <div className="row-item border border-dark" key={index} onClick={onEditModeOn}>
                  <Loader
                     type="Oval"
                     color="#00BFFF"
                     height={50}
                     width={50}
                  />
                </div>
              )
            }else{
              if(ticker.change.includes("+")){
                return(
                  <div className="stock-ticker-row border border-dark bg-success text-light" key={index} onClick={onEditModeOn}>
                    <div>{ticker.ticker.toUpperCase()}</div>
                    <div>{ticker.price}</div>
                    <div>{ticker.change}</div>
                    <div>{ticker.status}</div>
                  </div>
                )
              } else if(ticker.change.includes("-")){
                return(
                  <div className="stock-ticker-row border border-dark bg-danger text-light" key={index} onClick={onEditModeOn}>
                    <div>{ticker.ticker.toUpperCase()}</div>
                    <div>{ticker.price}</div>
                    <div>{ticker.change}</div>
                    <div>{ticker.status}</div>
                  </div>
                )
              } else{
                return(
                  <div className="stock-ticker-row border border-dark bg-primary text-light" key={index} onClick={onEditModeOn}>
                    <div>{ticker.ticker.toUpperCase()}</div>
                    <div>{ticker.price}</div>
                    <div>{ticker.change}</div>
                    <div>{ticker.status}</div>
                  </div>
                )
              }
            }

          })
        }
        {
          createEmptyRows().map((element, index) => {
            return(
              <div className="row-item border border-dark" key={index} onClick={onEditModeOn}>
              </div>
            )
          })
        }
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(StockTicker);
