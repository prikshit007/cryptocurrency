import React from 'react'
import './Crypto.css';

function Crypto({name,symbol,price,volume,priceChange,marketcap}) {
  return (
    <div className='coin-container'>
     <div className='coin-row'>
         <div className='coin'>
           
            <h1>{name}</h1>
            <p className='coin-symbol'>{symbol}</p>
         </div>
         
         <div className='coin-data'>
             <p className='coin-price'>${Number(price).toFixed(2)}</p>
             <p className='coin-volume'>${Number(volume).toFixed(2)}</p>
             <p>{priceChange<0 ?(
                 <p className='coin-percent red'>{Number(priceChange).toFixed(2)}% </p>
             ):(
                <p className='coin-percent green'>{Number(priceChange).toFixed(2)}% </p>
             )
            }</p>
              <p className='coin-marketcap'>
              Mkt Cap:  ${Number(marketcap).toFixed(2)}
          </p>
         </div>
     </div>
    </div>
  )
}

export default Crypto