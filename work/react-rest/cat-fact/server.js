const express = require('express');
const app = express();
const PORT = 5000; 
const catFact = require('./cat-fact');

app.use(express.static('./build')); 

app.get('/session', (req, res) => {
    setTimeout(() => { res.status(200).json(catFact)}, 3000);
    // res.status(200).json(catFact)
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/`);
});