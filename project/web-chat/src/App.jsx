import { useState, useEffect } from 'react';
import { checkSession, endSession, errorMessages } from './services';
import Nav from './Nav';
import Chat from './Chat';
import Login from './Login';
import DisplayUserInfo from './DisplayUserInfo'
import Loader from 'react-loader-spinner';
import './App.css';

function App() {
  const [userState, setUserState] = useState({
    isLoggedIn : false,
    isPending: true,
  });

  const [error, setError] = useState('');
  const [isDisplay, setIsDisplay] = useState(false)

  useEffect( () => {
    checkSession()
    .then( userinfo => {
      setUserState({
        isLoggedIn: true,
        isPending: false,
        username: userinfo.username,
        nickname: userinfo.username,
        // avatar: '',
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
  }, []); // only run on initial render

  const login = function({username, info}) {
    console.log(info)
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

  const displayUserInfo = function() {
    checkSession()
    .then( userinfo => {
      setUserState({
        ...userState,
        nickname: userinfo.username,
        info: userinfo.info
      });
      setIsDisplay(true);
    }) 
  };

  const displayChatPage = function() {
      setIsDisplay(false);
  };

  const changeTheme = function(){
    const newTheme = userState.theme==='light'? 'dark' : 'light';
    setUserState({
      ...userState,
      theme: newTheme,
  })
};

  if(userState.isPending) {
    return (
      <div className="pending">
          Waiting for loading...
         <Loader type="Circles" color="#00BFFF" height={30} width={30}/>
      </div>
    );
  }

  let chatPage;

  if(userState.isLoggedIn) {
    chatPage = isDisplay? <DisplayUserInfo userInfo={userState.info}/> : 
    <Chat username={userState.username} theme={userState.theme} onTheme={changeTheme} info={userState.info}/>;
  } else {
    chatPage = (<div><Login onLogin={login}/><Login/></div>);
                
  }
 
  // check and switch Nav 
  return (
    <div className="app">
      <Nav user={userState} onTheme={changeTheme} username={userState.username} 
        onChatPage={displayChatPage} onUserInfo={displayUserInfo} onLogout={logout}/>
      {chatPage}
      <p className="error-msg">{error}</p>
      
    </div>
    
  );
}

export default App;