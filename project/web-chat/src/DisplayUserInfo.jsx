const DisplayUserInfo = ({ userInfo }) => {

    console.log(userInfo);
    // const information = userInfo.map((info) => <li>{info}</li>);

    return (
        <div className="user-info">
            <div className="chat-header">
               <p>User information and setting</p>
            </div>
            <li>User image:  <img src={userInfo.avatar} width="30px" height="36px" ></img></li>
            <li>Nickname: {userInfo.nickname}</li>
            <li>Theme: {userInfo.theme}</li>
            <li>lastActive: {userInfo.lastActive}</li>

        </div>
    )
}

export default DisplayUserInfo;