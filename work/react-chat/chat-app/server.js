const express = require('express');
const app = express();
const PORT = 5000;
const cookieParser = require('cookie-parser');
const session = require('./session');
const chat = require('./chat');

app.use(express.static('./build'));
app.use(expressexpress.json());
app.use(cookieParser());

app.get('/api/session/messages', (req, res) => {
    const sid = req.cookies.sid;
    if (!sid) {
        res.status(401).json({ error: 'session-required'});
        return;
    }
    if(session.isValidSession(sid) ) {
        res.status(200).json(session.details[sid]);
        return; 
    }
    res.status(403).json({ error: 'session-invalid'});
});

app.post('/api/session', express.json(), (req, res) => {
    const { username } = req.body;
    
    const errors = session.validUserName(username); 
    if ( errors ) {
        res.status(400).json({ errors });
        return;
    } 
    const sid = session.createSession(username);
    res.cookie('sid', sid);
    // res.status(200).json(session[sid]);
});

app.delete('/api/session', (req, res) => {
    const sid = req.cookies.sid;
    session.remove(sid);
    res.clearCookie('sid');
    res.json({ sid, status: 'removed' });
  });

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/`);
  });