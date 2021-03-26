const express = require('express');
const app = express();
const PORT = 3000;
const cookieParser = require('cookie-parser');

app.use(express.static('./public'));
app.use(express.urlencoded({ extened: false }));
app.use(cookieParser());



app.listen(PORT, () => console.log(`Listening on: http://localhost:${PORT}`));