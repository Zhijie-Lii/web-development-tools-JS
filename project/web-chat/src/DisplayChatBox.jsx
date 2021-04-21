const DisplayChatBox = ({ userList, messageList}) => {
    // const users = messages.map( key => {})
    console.log("display: " + userList);
    const users = userList.map((user) => <li>{user}</li>);
    const messages = (messageList).map( (message) => 
        <li>
        <span key={message.sender} className="sender">{message.sender}</span>
        <span key={message.timeStamp} className="time-stamp">{message.timeStamp}</span><br/>
        <span key={message.text} className="text">{message.text}</span> 
        </li>);
    // const messages

    return (
        <div className="chat-page">
            Group chat:{users}
            <ul>{messages}</ul>
        </div>
    )
}

export default DisplayChatBox;