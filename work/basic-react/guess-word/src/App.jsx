import './App.css';
import {useState} from 'react';
import Answer from './Answer';
import { compareAndGiveAnswer } from './word';

function App( ) {
  const [guess,setGuess]= useState('');
  const [result, setResult] = useState('');

  function compareAgain (){
    let answer = compareAndGiveAnswer(guess);
    setResult(answer);
  };

  return (
    <div className="App">
      <header className="App-header">
        Guess a 5-letter word: 
      
        <input type="text" onChange={(e) => setGuess(e.target.value)}/>
        <button onClick={compareAgain}>Enter</button>
        <br/>
        <Answer result={result}/>
        </header>
    </div>
  );
}

export default App;
