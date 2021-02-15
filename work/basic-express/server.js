const express = require('express');
const app = express();
const PORT = 3000;

const chat = require('./chat'); // "chat" holds all the non-web logic for managing users/messages
const chatWeb = require('./chat-web'); // "chat-web" holds the templates for the generated HTML

app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.send(chatWeb.chatPage(chat));
});


// Below includes an example of pulling fields from a POST request body
app.post('/chat', express.urlencoded({ extended: false }), (req, res) => {
  const newMessageSender = req.body.username; // You'll need to add something!
  // Fill in here!
  //JSON.stringify  const {} ?
  const newMessageContent = req.body.message;

  sender = newMessageSender;
  text = newMessageContent;
  res.send(chat.addMessage({sender, text}));

  res.redirect('/');
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
