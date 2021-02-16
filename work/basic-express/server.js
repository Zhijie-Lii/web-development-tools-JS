const express = require('express');
const app = express();
const PORT = 3000;

const chat = require('./chat'); // "chat" holds all the non-web logic for managing users/messages
const chatWeb = require('./chat-web'); // "chat-web" holds the templates for the generated HTML

app.use(express.static('./public'));  //middleware

app.get('/', (req, res) => {   //display the default panel  
  res.send(chatWeb.chatPage(chat));
});


// Below includes an example of pulling fields from a POST request body
app.post('/chat', express.urlencoded({ extended: false }), (req, res) => {  // name as also loginAction
  const sender = req.body.username; // You'll need to add something!
  // Fill in here!
  // receivce form   = 2
  const text = req.body.message;

  // sender = newMessageSender;
  // text = newMessageContent;
  //res.send(chat.addMessage({sender, text}));

  chat.addMessage({sender, text});  //to chat.js

  res.redirect('/');
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
