import { React, useState, useEffect, useReducer } from 'react';
import {checkSession} from './services';
import './App.css';

function App() {
  const [userState, setUserState] = useState({
    isLoggedIn : false,
    isPending: true,
  });

  let messages = [];

  useEffect( () => {
    checkSession()
    .then( userinfo => {
      setUserState({
        isLoggedIn: true,
        isPending: false,
        username: userinfo.username,
        info: userinfo,
      });
    })
    .catch( () => {
      
    });
  }, [messages] );
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
