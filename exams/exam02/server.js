const express = require('express');
const app = express();
const PORT = 3000;
const cookieParser = require('cookie-parser');
const recipesData = require('./recipes-data');

app.use(express.static('./public'));
app.use(express.urlencoded({ extened: false }));
app.use(cookieParser());

app.get('/session', (req, res) => {
    const sid = req.cookies.sid;
    if (!sid) {
        res.status(401).json({ error: 'login-required'});
        return;
    }
    if(isValidSession(sid) ) {
        res.status(200).json(sessions[sid]);
        return; 
    }
    res.status(403).json({ error: 'login-invalid'});
});

app.get('/recipes', express.json(), (req, res) => {

    res.status(200).json({recipesData});
});


app.listen(PORT, () => console.log(`Listening on: http://localhost:${PORT}`));