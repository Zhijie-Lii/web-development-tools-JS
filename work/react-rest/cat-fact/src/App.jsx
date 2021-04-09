import { useState,useEffect } from 'react';
import {fetchCat } from './services';
import CatFacts from './CatFacts';
import Loader from 'react-loader-spinner';
import './App.css';

function App() {
  const [catFact, setCatFact] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [start, setStart] = useState(0);
  const [size, setSize] = useState(5);
  const [error, setError] = useState('');

  // useEffect( () => {
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


  return (
    <div id="app">
      <div className="fact-content">{isLoading ? "isLoading..." : null}
      <CatFacts facts={catFact} start={start} size={size}></CatFacts>
      </div>

      <div className="loadButton"><button onClick={loadFact}>Load Facts</button></div>
      <select onChange={(e) => setSize(parseInt(e.target.value))}>
        <option value="5">5</option>
        <option value="10">10</option>
      </select>
        <div>
        <button onClick={ () => setStart(start-size)}>Previous &lt;</button>
        <span className="fact-range">{"1-10"}</span>
        <button onClick={ () => setStart(start+size)}>&gt; Next</button>
        </div>
      <p className="errorMsg">{error}</p>
    </div>
  );
}

// <image src='spinner'></image>
export default App;
