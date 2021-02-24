"use strict";

const express = require('express');
const app = express();
const PORT = 2000;
const cookieParser = require('cookie-parser');
const uuidv4 = require('uuid').v4;

const words = require('./words');
const gamePanel = require('./game-panel');
const comparedWords = require('./compared-words');

app.use(cookieParser());
app.use(express.urlencoded({ extended: false}));
app.use(express.static('./public'));

 const session = {}

app.post('/session', (req,res) => {
  const username = req.body.username;

  const sid  = uuidv4();
  res.cookie("sid", sid);
  session[sid] = {
    username : sid
  };
  res.redirect('/');
});

app.get('/', (req,res) => {
  const sid = req.cookies.sid;
  if(!sid || !session[sid]) {
    res.send('Please log in first to play the game, <a href="./login.html">Login Now</a>');
  }

    const secretWord = console.log(session[sid]); // pass in the secret word  how to export secret word?
    res.send(gamePanel.gamePage(words));
});


// guess word enter to 
app.post('/trial', (req, res) => {
  const trial = req.body.trial;
  if ( !comparedWords.contains(words, trial)) {
    res.status(403).send('Warning: Invalid word. <a href="/">Got it</a>');
    return;
  }

   // check isEqual() to the secret word
  else if (secretWord === trial){
    console.log("Yes, you get the word in ${turns} times, and you can now change new words");
  return;
  }

  else if( !compareWords.contains(gamePanel.guessedWord.key(), trial)){
    res.status(403).send('Warning: this word has been guessed. <a href="/">Try again</a>');
    return;
  }

  else { 
      // comparedWords.guessedWordList.push(trial);
       //comparedWords.wordMatchesList.push(compare(words, trial));
      const Match = comparedWords.compare(words,trial) 
      comparedWords.guessedWord.push({trial: Match});
      comparedWords.turns++;
      return;
    }
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
