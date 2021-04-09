// simple server.js to go along with create-react-app
const express = require('express');
const app = express();
const PORT = 5000; 
const catFact = require('./cat-fact');

app.use(express.static('./build')); //

app.get('/api/test', (req, res) => { 
  res.send('server works');
});

app.get('/session', (req, res) => {
    setTimeout(() => { res.status(200).json(catFact)}, 1000);
    // res.status(200).json(catFact)
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/`);
});