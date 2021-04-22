const DisplayChatBox = ({ userList, messageList}) => {

    console.log("display: " + userList);
    const users = userList.map((user) => <span>{user}</span>);
    const messages = (messageList).map( (message) => 
        <li>
        <img src="./avatar_boy2.jpg" width="15px" height="18px" alt="girl"></img>
        <span key={message.sender} className="sender">{message.sender}</span>
        <span key={message.timeStamp} className="time-stamp">{message.timeStamp}</span><br/>
        <span key={message.text} className="text">{message.text}</span> 
        </li>);
    // const messages

    return (
        <div className="chat-page">
            <div className="chat-header">
                Group chat:  {users},
            
            </div>
            <br/>
            <ul>{messages}</ul>
        </div>
    )
}

export default DisplayChatBox;