import React from 'react';
import { connect } from 'react-redux';
import { editModeOn, editModeOff, updateTickerData } from '../../actions';

const mapStateToProps = (state) => {
  return{
    tickers: state.updateStockTickers.tickers,
    tickerData: state.updateStockTickers.tickerData,
    editMode: state.updateStockTickers.editMode
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

  const { tickers, tickerData, editMode, onEditModeOn, onEditModeOff, onUpdateTickerData } = props

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

  if(editMode){
    return(
      <div className="stock-ticker bg-light d-flex flex-row flex-wrap justify-content-start align-items-center">
        <div className="send-stock-data">
          <button type="button" className="send-stock-data-button btn btn-info" onClick={updateStockTickerData}>Update Stock Tickers</button>
        </div>
        {
          tickers.map((ticker, index) => {
            return(
              <div className="row-item border border-dark" key={index}>
                <input type="text" className="ticker-symbol" placeholder="Ticker Symbol..." defaultValue={ticker.symbol}/>
                <select name="market" className="markets" defaultValue={ticker.market}>
                  <option value="" className="default-market"></option>
                  <option value="TO" className="market">TSX</option>
                  <option value="V" className="market">TSXV</option>
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
