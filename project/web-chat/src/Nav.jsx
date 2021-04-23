const Nav = ({user, username, onUserInfo, onChatPage, onTheme, onLogout}) => {

    if(!user.isLoggedIn) {
        return null;
      }

    return (
        <div className="nav">
          <ul className="nav-link" >
            <li><a href="#user-info" onClick={onUserInfo}>Info</a></li>
            <li><a href="#chat-page" onClick={onChatPage}>chat-page</a></li>
            <li>"Username": {username}</li>
            <li><button className onClick={onTheme}>Change Theme</button></li>
            <li className="logout"><a href="#logout" onClick={onLogout}>Logout</a></li>
          </ul>
        </div>
      );
};

export default Nav;