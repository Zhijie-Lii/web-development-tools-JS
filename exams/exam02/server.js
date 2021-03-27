const express = require('express');
const app = express();
const PORT = 3000;
const cookieParser = require('cookie-parser');
const recipesData = require('./recipes-data');

app.use(express.static('./public'));
app.use(express.urlencoded({ extened: false }));
app.use(cookieParser());

app.get('/recipes', express.json(), (req, res) => {

    res.status(200).json({recipesData});
});


app.listen(PORT, () => console.log(`Listening on: http://localhost:${PORT}`));