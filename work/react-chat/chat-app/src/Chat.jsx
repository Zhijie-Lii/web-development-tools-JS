import ShowMessages from "./ShowMessages";

const Chat = ( ) => {
    // const users = messages.map( key => {})
    const[usersList, setUsersList] = useState([]);
    const[messagesList, setmessagesList] = useState([]);
    
    useEffect( () => {
        fetchUsersList()
        .then( usersList => {
            setUsersList(usersList)
        })
        .catch( () => {
          // We treat any failure as not logged in
          setUserState({
            isLoggedIn: false,
            isPending: false,
          });
        });

        fetchMessagesList()
        .then( messagesList => {
            setMessagesList( messagesList)
          })
          .catch( () => {
            // We treat any failure as not logged in
            setUserState({
              isLoggedIn: false,
              isPending: false,
            });
          });
      }, []);

    return (
        <ul>
            <DisplayChatBox usersList={usersList} messagesList={messagesList}>
           </DisplayChatBox>
           
            {/* { Object.keys(messages).map( key => ( <li key={key}>{key}: {messages[key]}</li> ) ) } */}
        </ul>
    )
}

export default Chat;