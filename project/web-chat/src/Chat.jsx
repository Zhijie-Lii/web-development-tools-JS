import DisplayChatBox from "./DisplayChatBox";
import { useState, useEffect } from 'react';
import { fetchUserList, fetchMessageList, fetchNewMessage, errorMessages } from './services';

const Chat = ({username, theme, info, setError} ) => {
    const [userList, setUserList] = useState([]);
    const [messageList, setMessageList] = useState([]);
    // const [error, setError] = useState('');
    const [text,setText] = useState('');

    let errorMsg;

    function addNewMessage() {
      console.log(text, username)
      fetchNewMessage( username, text )
      .then( (newMessageList) => {
        console.log(newMessageList);
        setMessageList( newMessageList );
        setText('');
      })
      .catch( err => {
        setError( errorMessages[err.code || 'DEFAULT'] );
      });
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
            setError( errorMessages[err.code || 'DEFAULT'] )
          });
      }, []);

    return (
        <ul className={theme}>
            <DisplayChatBox userList={userList} messageList={messageList} userInfo={info}></DisplayChatBox>
            <p className="error-msg">{errorMsg}</p>

            <div className="outgoing">
              <textarea rows="3" cols="50" onChange={(e) => setText(e.target.value)} value={text}></textarea>
              <img onClick={addNewMessage} src="./send_icon.svg" width="50px" height="50px"></img>
            </div>
        </ul>
    )
}

export default Chat;