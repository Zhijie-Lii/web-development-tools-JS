import { useState, useEffect, useReducer } from 'react';
import { checkSession, endSession } from './services';
import Nav from './Nav';
import Chat from './Chat';
import Login from './Login';
import { reducer } from './reducer';
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

  // const [state, dispatch] = useReducer(reducer, initState); 
  // const setTheme = (e) => dispatch({
  //   type: 'setTheme',
  //   theme: e.target.value });

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
  }, []); // only run on initial render

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
      ...userState,  
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
         <Loader type="Circles" color="#00BFFF" height={20} width={20}/>
      </div>
    );
  }

  let chatPage;

  if(userState.isLoggedIn) {
    chatPage = <Chat username={userState.username} theme={userState.theme} onTheme={changeTheme}/>;
  } else {
    chatPage = (<div><Login onLogin={login}/><Login/></div>);
                
  }
 
  // check and switch Nav 
  return (
    <div className="app">
      <Nav user={userState} onTheme={changeTheme} username={userState.username} onLogout={logout}/>
      {chatPage}
      
    </div>
    
  );
}

export default App;
