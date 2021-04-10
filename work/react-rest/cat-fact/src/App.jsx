import { useState } from 'react';
import {fetchCat } from './services';
import CatFacts from './CatFacts';
import Loader from 'react-loader-spinner';
import './App.css';

function App() {
  const [catFact, setCatFact] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [start, setStart] = useState(0);
  const [size, setSize] = useState(5);
  const [error, setError] = useState('');

  const factMsg = `Show Facts ${start+1}-${start+size}`;

  const loadFact = function() {
    setIsLoading(true);
    fetchCat()
    .then( facts => {
      setCatFact(facts);
      setIsLoading(false);

      })
      .catch( err => {
        setError(err);
    })
  };

  // const disableNextBtn = function (){
  //   if ( start+ 2*size > catFact.length){
  //     start = catFact.length - size;
  //     return true;
  //   };
  //   return false;
  // };


  if (!catFact){
    return (
      <div className="notLoaded">0 Fact Loaded<br/>
        <div className="isLoading"> 
          {isLoading ? <Loader type="Circles" color="#00BFFF" height={30} width={30}/>: 
            <button onClick={loadFact}>Load Facts</button>}
        </div>
      </div>
    )
  };

  return (
    <div id="app">
      <div className="fact-content">
      <CatFacts facts={catFact} start={start} size={size}></CatFacts>
      </div>
      
      
      <select onChange={(e) => setSize(parseInt(e.target.value))}>
        <option value="5">5</option>
        <option value="10">10</option>
      </select>
        <div className="factAdjust">
        <button disabled={start-size < 0? true:false} onClick={ () => setStart(start-size)}>Previous &lt;</button>
        <span className="fact-range"> {factMsg} </span>
        <button disabled={start+2*size > catFact.length? true:false} onClick={ () => setStart(start+size)}>&gt; Next</button>
        </div>
      <p className="errorMsg">{error}</p>
    </div>
  );
}

export default App;
