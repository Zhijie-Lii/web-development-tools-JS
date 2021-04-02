const express = require('express');
const app = express();
const PORT = 3000;
const cookieParser = require('cookie-parser');
const recipesData = require('./recipes-data');
const { validUsername, createSession, session} = require('./session');

app.use(express.static('./public'));
app.use(express.urlencoded({ extened: false }));
app.use(cookieParser());

app.get('/recipes', express.json(), (req, res) => {

    res.status(200).json(recipesData);
});

app.get('/recipes/:recipeId', express.json(), (req, res) => {
    const id = req.params.recipeId;
    if (!id) { 
        res.status(401).json({ error: 'You click on wrong item'});
        return;
    }
    res.status(200).json(recipesData[id]);
});

app.get('/session', (req, res) => {
    const sid = req.cookies.sid;
    if (!sid) { 
        res.status(401).json({ error: 'Need to login first to submit new recipe'});
        return;
    }
    // if(isValidSession(sid) ) {
    //     res.status(200).json(session[sid]);
    //     return; 
    // }
    console.log('fail to valid session')
    res.status(403).json({ error: 'login-invalid'}); //
});

app.post('/session', express.json(), (req, res) => {
    const username = req.body.username;
    const usernameErrors = validUsername( username );
    if (usernameErrors) {
        res.status(400).json(usernameErrors);
        return;
    }
    const sid = createSession( username );
    res.cookie('sid', sid);
    res.status(200).json(session[sid]);
    console.log(sid, session[sid]); //
});

app.delete('/session', express.json(), (req, res) => {
    const sid = req.cookies.sid;
    console.log('to logout')
    res.clearCookie('sid');
    delete session[sid];

    res.status(200).json(123);
})

app.post('/recipe', express.json(), (req, res) => {
    const sid = req.cookies.sid;
    console.log(req.body.title)
    let {title, ingredient, instruction} = req.body;
    console.log(recipesData)
    const newId = recipesData.getId()
    console.log(session[sid].username)
    const newItem = {
        title: title,
        author: session[sid].username,
        ingredient: ingredient,
        instruction: instruction,
        id: newId
    }
    recipesData.recipesData[newId] = newItem;
    console.log(newItem)
    res.status(200).json(recipesData.recipesData[newId]);

});

app.listen(PORT, () => console.log(`Listening on: http://localhost:${PORT}`));