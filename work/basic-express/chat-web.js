const chatWeb = {
  chatPage: function(chat) {
    // Fill in anything below!
    //chat.user = user.values;

    return `
      <!doctype html>
      <html>
        <head>
          <title>Chat</title>
          <link rel="stylesheet" href="public/css/basic-express.css">
        </head>
        <body>
          <div id="chat-app">
            <div class="display-panel">
              ${chatWeb.getUserList(chat)}
              ${chatWeb.getMessageList(chat)}
              
            </div>
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
          <span class="messageContent">${message}</span>
        </div>
      </li>
    `).join('') +
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
  getOutgoing: function() {
    // Fill in!
    //return outgoing.html;
  }
};
module.exports = chatWeb;
