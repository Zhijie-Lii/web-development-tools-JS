const express = require('express');
const app = express();
const PORT = 5000;
const cookieParser = require('cookie-parser');
// const sessionsManage = require('./sessions');

app.use(express.static('./build'));
app.use(express.urlencoded({ extened: false }));
app.use(cookieParser());

app.get('/session', (req, res) => {
    const sid = req.cookies.sid;
    if (!sid) {
        res.status(401).json({ error: 'login-required'});
        return;
    }
    if(sessionsManage.isValidSession(sid) ) {
        res.status(200).json(sessionsManage.sessions[sid]);
        return; 
    }
    res.status(403).json({ error: 'login-invalid'});
});

app.post('/session', express.json(), (req, res) => {
    const { username } = req.body;
    
    const errors = sessionsManage.validUserName(username); 
    if ( errors ) {
        res.status(400).json({ errors });
        return;
    } 
    const sid = sessionsManage.createSession(username);
    res.cookie('sid', sid);
    res.status(200).json(sessionsManage.sessions[sid]);
});