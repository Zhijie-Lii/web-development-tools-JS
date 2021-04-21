const messages = [
    {
        sender: "Jennie",
        text: "Hey there, how is it going?",
        timeStamp: "4:00",
    },
    {
        sender: "Deepika",
        text: "Not good, busy in checking 6250 homework, weather annoying",
        timeStamp: "4:02",
    },
    {
        sender: "Jason",
        text: "Whoo, does anyone want to go for 5/1 vacation?",
        timeStamp: "4:03",
    },
    {
        sender: "Yao",
        text:"Where? Changsha?",
        timeStamp: "4:05",
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