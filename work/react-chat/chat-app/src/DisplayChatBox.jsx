const DisplayChatBox = ({userList, messageList}) => {
    // const users = messages.map( key => {})
    const users = userList.map((user) => <li>{user}</li>);
    const messages = messageList.map( (message) => <li>{message}</li>);
        
    return (
        <ul>
            {users}
            {messages}
            {/* { Object.keys(messages).map( key => ( <li key={key}>{key}: {messages[key]}</li> ) ) } */}
        </ul>
    )
}

export default DisplayChatBox;