const DisplayChatBox = ({ userList, messageList}) => {

    // const users = userList.map((user) => <li>{user}</li>);
    const messages = (messageList).map( (message) => 
        <li>
        <span key={message.sender} className="sender">{message.sender}</span>
        <span key={message.timeStamp} className="time-stamp">{message.timeStamp}</span><br/>
        <span key={message.text} className="text">{message.text}</span> 
        </li>);

    return (
        <div className="chat-page">
            Group chat: Jennie, Deepika, {userList}
            <ul>{messages}</ul>
        </div>
    )
}

export default DisplayChatBox;