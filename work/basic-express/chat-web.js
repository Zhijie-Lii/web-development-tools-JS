const chatWeb = {
  chatPage: function(chat) {
    // Fill in anything below!

    return `
      <!doctype html>
      <html>
        <head>
          <title>Chat</title>
          <link rel="stylesheet" href="/css/chat-page.css">
        </head>
        <body>
          <div id="chat-app">
            <div class="display-panel">
              ${chatWeb.getUserList(chat)}
              </br>
              ${chatWeb.getMessageList(chat)}
              
            </div>
            </br>
            ${chatWeb.getOutgoing(chat)}
          </div>
        </body>
      </html>
  `;
  },

  getMessageList: function(chat) {
    return `<ol class="messages">` +
      // Fill in!
      chat.messages.map( message => `
      <li>
        <div class="message">
          <span class="messageContent">${message.sender}</span>
          </br>
          <span class="messageContent">${message.text}</span>  
        </div>
      </li>
    `).join('') + // split 20 messages out
      `</ol>`;
  },
  getUserList: function(chat) {
    return `<ul class="users">` +
    Object.values(chat.users).map( user => `
      <li>
        <div class="user">
          <span class="username">${user}</span>
        </div>
      </li>
    `).join('') + // ?
    `</ul>`;
  },
  getOutgoing: function(chat) {
    // Fill in!
    //return outgoing.html;
      return `  <form action="/chat" method="POST">
                <div>
                <input type="hidden" name="username" value="Amit"＞
                </div>
                <input type="text" name="message">
    
                <button type="submit">Press to send</button>
                </form>`;
  }
};
module.exports = chatWeb;
