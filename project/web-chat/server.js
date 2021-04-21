const express = require('express');
const app = express();
const PORT = 5000;
const cookieParser = require('cookie-parser');
const session = require('./session');
const chat = require('./chat.js');

app.use(express.static('./build'));
app.use(express.json());
app.use(cookieParser());

app.get('/api/session', (req, res) => {
    const sid = req.cookies.sid;
    if (!sid) {
        res.status(401).json({ error: 'session-required'});
        return;
    }
    if(!session.isValidSession(sid) ) {
        res.status(403).json({ error: 'session-invalid'});
        return; 
    }
    setTimeout((res.status(200).json(session.details[sid])),3000);
    
});

app.post('/api/session', (req, res) => {
    const { username } = req.body;
    
    const { error, sid } = session.create({username}); 
    if ( error ) {
        res.status(400).json({ error });
        return;
    } 

    res.cookie('sid', sid);
    res.status(200).json(session.details[sid]);
});

app.delete('/api/session', (req, res) => {
    const sid = req.cookies.sid;
    session.remove(sid);
    res.clearCookie('sid');
    res.json({ sid, status: 'removed' });
  });

app.get('/api/userList',(req, res) => {
    res.json(Object.values(session.details).map( 
        eachSession =>  eachSession.username ));

});

app.get('/api/messageList',(req, res) => {
    // console.log(chat.messages)
    setTimeout(res.json(chat.messages), 2000);
    
})

app.post('/api/messageList', (req, res) => {
    const sid = req.cookies.sid;
    
    console.log(sid)
    chat.messages.push({
        sender, 
        text, 
        // avatar:session.details[sid].avatar ,
        timeStamp,
    });
    res.json(chat.messages);

})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/`);
  });