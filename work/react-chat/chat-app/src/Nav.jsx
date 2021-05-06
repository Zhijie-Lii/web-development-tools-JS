const Nav = ({user, username, onTheme, onLogout}) => {
    
    if(!user.isLoggedIn) {
        return null;
      }

    return (
        <div className="nav">
          <ul className="nav-link" >
            <li>"Username": {username}</li>
            <li><button className onClick={onTheme}>Change Theme<img></img></button></li>
            <li className="logout"><a href="#logout" onClick={onLogout}>Logout</a></li>
          </ul>
        </div>
      );
};

export default Nav;