import { useState, useEffect } from 'react';
import { checkSession, endSession, errorMessages } from './services';
import Nav from './Nav';
import Chat from './Chat';
import Login from './Login';
import Loader from 'react-loader-spinner';
import './App.css';

function App() {
  const [userState, setUserState] = useState({
    isLoggedIn : false,
    isPending: true,
  });

  function changeTheme(){
    const newTheme = userState.theme==='light'? 'dark' : 'light';
    setUserState({
      ...userState,
      theme: newTheme,
  })
};

  const [error, setError] = useState('');

  useEffect( () => {
    checkSession()
    .then( userinfo => {
      setUserState({
        isLoggedIn: true,
        isPending: false,
        username: userinfo.username,
        theme: 'light',
        lastActive: Date.now(),
      });
    })
    .catch( () => {
      setUserState({
        isLoggedIn: false,
        isPending: false,
      });
    });
  }, []);

  const login = function({username, info}) {
    setUserState({
      isLoggedIn: true,
      isPending: false,
      username,
      info,
    });
  };

  const logout = function() {
    setUserState({
      ...userState,  
      isPending: true,
    });
    endSession()
    .then( () => {
      setUserState({
        isLoggedIn: false,
        isPending: false,
      });
    })
    .catch( (err) => {
      setError( errorMessages[err.code || 'DEFAULT'] )
      setUserState({
        ...userState,
        isPending: false,
      });
    });
  };

  if(userState.isPending) {
    return (
      <div className="app">
         <Loader type="Circles" color="#00BFFF" height={20} width={20}/>
      </div>
    );
  }

  let chatPage;

  if(userState.isLoggedIn) {
    chatPage = <Chat username={userState.username} showError={setError}
    theme={userState.theme} onTheme={changeTheme}/>;
  } else {
    chatPage = (<div><Login onLogin={login}/></div>);
                
  }
 
  // check and switch Nav 
  return (
    <div className="app">
      <Nav user={userState} onTheme={changeTheme} username={userState.username} onLogout={logout}/>
      {chatPage}
      <p className="error">{error}</p>
    </div>
  );
}

export default App;
