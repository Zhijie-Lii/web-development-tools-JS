const express = require('express');
const app = express();
const PORT = 4000;
const cookieParser = require('cookie-parser');
const sessionsManage = require('./sessions');
// const sessions = require('./sessions');

app.use(express.static('./public'));
app.use(express.urlencoded({ extened: false }));
app.use(cookieParser());

app.get('/session', (req, res) => {
    const sid = req.cookies.sid;
    if (!sid) {
        res.status(401).json({ error: 'login-required'});
        return;
    }
    // if (sessions[sid].username == 'dog') { // prevent the dog
    //     res.status(403).json({ error: 'illegal-user'})
    // }
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
    }  // not need 
    const sid = sessionsManage.createSession(username);
    res.cookie('sid', sid);
    res.status(200).json(sessionsManage.sessions[sid]);
});

app.post('/todo', express.json(), (req, res) => {
    const sid = req.cookies.sid;
    console.log(req.body);
    sessionsManage.sessions[sid]["todos"].push(req.body);
    // console.log(sessions[sid][todos])

    res.status(200).json(sessionsManage.sessions[sid]["todos"]);
});

app.delete('/session/:index', (req, res) => {
    const sid = req.cookies.sid; 
    const index = req.params.index;
    console.log(index);
    if (!index) {
        res.status(400).json( {error});
        return;
    }
    delete sessionsManage.sessions[sid]["todos"][index];
    res.status(200).json(sessionsManage.sessions[sid]["todos"]);
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));