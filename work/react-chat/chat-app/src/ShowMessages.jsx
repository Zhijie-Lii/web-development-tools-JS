const ShowMessages = ({ messages }) => {
    // const users = messages.map( key => {})
    
    return (
        <ul>
            { Object.keys(messages).map( key => ( <li key={key}>{key}: {messages[key]}</li> ) ) }
        </ul>
    )
}

export default ShowMessages;