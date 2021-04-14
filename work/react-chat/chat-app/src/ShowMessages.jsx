const ShowMessages = ({ messages }) => {
    // const users = messages.map( key => {})
    
    return (
        <ul>
            { Object.keys(stuff).map( key => ( <li key={key}>{key}: {stuff[key]}</li> ) ) }
        </ul>
    )
}