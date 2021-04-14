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
        nickname: userinfo.info,
        avatar: '',
        theme: 'light',
        lastActive: Date.now(),
      });
    })
    .catch( () => {
      // We treat any failure as not logged in
      setUserState({
        isLoggedIn: false,
        isPending: false,
      });
    });
  }, [messages]); // only run on initial render

  const login = function({username, info}) {
    setUserState({
      isLoggedIn: true,
      isPending: false,
      username,
      info,
    });
  };

  const logout = function() {
    // Inform UI to wait
    setUserState({
      ...userState,  // spread into array?
      isPending: true,
    });
    // Begin logout
    endSession()
    .then( () => {
      setUserState({
        isLoggedIn: false,
        isPending: false,
      });
    })
    .catch( () => {
      // TODO: notify user of issue
      setUserState({
        ...userState,
        isPending: false,
      });
    });
  };

  if(userState.isPending) {
    return (
      <div className="app">
        Loading...
      </div>
    );
  }

  let chatPage;

  if(userState.isLoggedIn) {
    chatPage = <ShowMessages messages={userinfo.info}/>;
  } else {
    chatPage = <Login onLogin={login}/>;
  }
 
  return (
    <div className="app">
      <Nav user={userState} onLogout={logout}/>
      {chatPage}
    </div>
  );
}

export default App;