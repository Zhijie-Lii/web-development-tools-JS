const express = require('express');
const app = express();
const PORT = 3000;
const inventory = require('./inventory'); 
const uuidv4 = require('uuid').v4;

app.use(express.static('./public'));

// app.get('/inventory/:name', (req, res) => {
//     const name = req.params.name;
//     if(inventory.itemId[name]) {
//       res.json(inventory.itemId[name]);
//     } else {
//       res.status(404).json({ error: `No such item: ${name}`});
//     }
//   });
  
  app.get('/inventory', (req, res) => {
    res.json(Object.entries(inventory));  // return into array
  });
  
  app.post('/inventory/:name', express.json(), (req, res) => {
    const name = req.params.name;
    // TODO: Should sanitize user input here before saving!
    if(!name) {
      res.status(400).json({ error: 'missing-name' });
      return;
    }
    for (const item of Object.values(inventory)) {   // prevent from same name 
      if(item.name==name ) {
        res.status(409).json({ error: 'duplicate' });
        return;
      }
    }
 
    const Id = uuidv4();
    inventory[Id] = {
        itemId : Id,
        name : name,
        quantity : 0,
    }
    res.json(Object.entries(inventory));
  });

  app.patch('/inventory/:itemId', express.json(), (req, res) => {
    const itemId = req.params.itemId;
    if(!itemId) {
        res.status(400).json({ error: 'missing-item' });
        return;
    }
    inventory[itemId].quantity = parseInt(req.body.quantity);
    res.json(Object.entries(inventory));  // pass back to front-JS as .then(() => ...)
  })
  
  app.delete('/inventory/:itemId', (req, res) => {
    const itemId = req.params.itemId;
    if(!itemId) {
      res.status(400).json({ error: 'missing-itemId' });
      return;
    }
    delete inventory[itemId];
    res.json(Object.entries(inventory));
  });

app.listen(PORT, ()=> console.log(`listening on http://localhost:${PORT}`));
