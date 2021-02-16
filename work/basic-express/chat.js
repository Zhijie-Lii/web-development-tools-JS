const users = {
    "Amit": "Amit",
    "Bao": "Bao",
};

const messages = [
  {
    sender: "Amit",
    text: "You up?",
  },
  {
    sender: "Bao",
    text: "Yeah, still working on this INFO6250 work, but I keep getting distracted by cat videos",
  }
]; 

function addMessage({ sender, text }) {
  // Fill in!
  // JS Object
  //add message into the arrayMessages
  messages.push({sender,text});
}    //declare  expression first (hoist) and use 

const chat = {
  users,     
  messages,
  addMessage,
};

module.exports = chat;

