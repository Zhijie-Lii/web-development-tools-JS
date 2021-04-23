import DisplayChatBox from "./DisplayChatBox";
import { useState, useEffect } from 'react';
import { fetchUserList, fetchMessageList, fetchNewMessage, errorMessages } from './services';

const Chat = ({username, theme, showError} ) => {
    const [userList, setUserList] = useState([]);
    const [messageList, setMessageList] = useState([]);
    const [error, setError] = useState('');
    const [text,setText] = useState('');

    function addNewMessage() {
      fetchNewMessage( username, text )
      .then( (newMessageList) => {
        console.log(newMessageList);
        setMessageList( newMessageList );
        setText('');
      })
      .catch( err => showError( errorMessages[err.code || 'DEFAULT'] ));
    }

    
    useEffect( () => {
        fetchUserList()
        .then( user => setUserList(user) )
        .catch( err =>
          setError( errorMessages[err.code || 'DEFAULT'] )
        );

        fetchMessageList()
        .then( message => {
          // console.log(message);
          setMessageList( message );
          })
          .catch( (err) => {
            showError( errorMessages[err.code || 'DEFAULT'] )
          });
      }, []);

    return (
        <ul className={theme}>
            <DisplayChatBox userList={userList} messageList={messageList}></DisplayChatBox>
            
            <p className="error-msg">{error}</p>

            <div className="outgoing">
              <textarea rows="5" cols="30" onChange={(e) => setText(e.target.value)} value={text}></textarea>
              <button onClick={addNewMessage}>Send</button>
            </div>
        </ul>
    )
}

export default Chat;