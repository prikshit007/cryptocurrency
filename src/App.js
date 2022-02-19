
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Crypto from './Crypto';
import Pagination from './Pagination';


function App() {
  const [cryptos,setCryptos]=useState([]);
  const [search,setSearch]=useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [CryptosPerPage] = useState(10);


useEffect(()=>{
  axios.get('https://api.coincap.io/v2/assets')
  .then(res=>{
    setCryptos(res.data.data);
    console.log(res.data);
  })
  .catch(error=>console.log(error));
},[]);

const indexOfLastCrypto = currentPage * CryptosPerPage;
const indexOfFirstPost = indexOfLastCrypto - CryptosPerPage;
const currentCryptos = cryptos.slice(indexOfFirstPost, indexOfLastCrypto);
const paginate = pageNumber => setCurrentPage(pageNumber);

   const handleChange=e=>{
     setSearch(e.target.value);
   }

const filteredCrypto=currentCryptos.filter(crypto=>
 crypto.name.toLowerCase().includes(search.toLowerCase())
);

  return (
    <div className="coin-app">
      <div className='coin-search'>
        <h1 className='coin-text'>Search a CryptoCurrency</h1>
        <form>
          <input type="text" placeholder='Search Crypto' onChange={handleChange} className='coin-input'/>
        </form>
      </div>
        {filteredCrypto.map(crypto=>{
          return(
            <Crypto key={crypto.id} 
            name={crypto.name}
            symbol={crypto.symbol}
            volume={crypto.volumeUsd24Hr}
            price={crypto.priceUsd}
            priceChange={crypto.changePercent24Hr}
            marketcap={crypto.marketCapUsd}/>
          )
        })}
          <Pagination
        CryptosPerPage={CryptosPerPage}
        totalCryptos={cryptos.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
