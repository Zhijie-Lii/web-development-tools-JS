const express = require('express');
const app = express();
const PORT = 3000;
const cookieParser = require('cookie-parser');
const sessionsManage = require('./sessions');

app.use(express.static('./public'));
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

app.post('/todo', express.json(), (req, res) => {
    const sid = req.cookies.sid;
    let id = Date.parse(new Date());
    let item = req.body;
    item.id = id;
    console.log('In POST', req.body);
    sessionsManage.sessions[sid]["todos"].push(item);
    res.status(200).json(sessionsManage.sessions[sid]["todos"]);
});

app.patch('/todo/:index', express.json(), (req, res) => {
    const sid = req.cookies.sid;
    const id = parseInt(req.params.index);
    if (!id) {
        res.status(400).json( {error: 'There is no index'});
        return;
    }
    const newPriority = req.body.priority;
    // console.log(req.body, index);/
    // sessionsManage.sessions[sid]["todos"][index].priority = newPriority;
    let allData = sessionsManage.sessions[sid]["todos"];
    let item = null; 
    allData.forEach(element => {
        if(element.id == id){
            element.priority = newPriority;
            item = element;
        }
    });
    res.status(200).json([item]);
})

app.delete('/todo/:index', (req, res) => {
    const sid = req.cookies.sid; 
    const id = req.params.index;
    if (!id) {
        res.status(400).json( {error});
        return;
    }
    // delete  sessionsManage.sessions[sid]["todos"][index];
    // sessionsManage.sessions[sid]["todos"].splice(index,1);
    let allData = sessionsManage.sessions[sid]["todos"]; 
    allData.splice(allData.findIndex((item) => { item.id == id }), 1 );
    res.status(200).json(allData);
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));