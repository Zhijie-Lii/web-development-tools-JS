const express = require('express');
const app = express();
const PORT = 5000;
const cookieParser = require('cookie-parser');
const session = require('./session');

app.use(express.static('./build'));
app.use(expressexpress.json());
app.use(cookieParser());

app.get('/api/session', (req, res) => {
    const sid = req.cookies.sid;
    if (!sid) {
        res.status(401).json({ error: 'login-required'});
        return;
    }
    if(session.isValidSession(sid) ) {
        res.status(200).json(session.sessions[sid]);
        return; 
    }
    res.status(403).json({ error: 'login-invalid'});
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