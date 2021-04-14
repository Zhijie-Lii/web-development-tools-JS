const messages = [
    {
        sender: "Jennie",
        text: "Hey there, how is it going?",
    },
    {
        sender: "Deepika",
        text: "Not good, busy in checking 6250 homework, weather annoying",
    },
    {
        sender: "Jason",
        text: "Whoo, does anyone want to go for 5/1 vacation?"
    },
    {
        sender: "Yao",
        text:"Where? Changsha?"
    },
];

function addMesssage({ sender, text }){
    messages.push({ sender, text });
}

const chat = {
    messages,
    addMesssage
}
module.exports = chat;