const ShowMessages = ({usersList, messagesList}) => {
    // const users = messages.map( key => {})
    const users = usersList.map((user) => 
        <li>{user}</li>)
    return (
        <ul>
            {users}
            {/* { Object.keys(messages).map( key => ( <li key={key}>{key}: {messages[key]}</li> ) ) } */}
        </ul>
    )
}

export default ShowMessages;