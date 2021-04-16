import DisplayChatBox from "./DisplayChatBox";
import { useState, useEffect } from 'react';
import { fetchUserList, fetchMessageList } from './services';

const Chat = ( ) => {
    // const users = messages.map( key => {})
    const[userList, setUserList] = useState([]);
    const[messageList, setMessageList] = useState([]);
    
    useEffect( () => {
        fetchUserList()
        .then( user => {
            setUserList(user)
        })
        .catch( () => {
          // We treat any failure as not logged in
          
        });

        fetchMessageList()
        .then( message => {
            setMessageList( message )
          })
          .catch( () => {
            // We treat any failure as not logged in
            
          });
      }, []);

    return (
        <ul>
            <DisplayChatBox userList={userList} messageList={messageList}>
            </DisplayChatBox>
        </ul>
    )
}

export default Chat;