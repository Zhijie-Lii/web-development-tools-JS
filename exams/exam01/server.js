"use strict";

const express = require('express');
const app = express();
const PORT = 3000;
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

  const sid  = uuidv4();
  res.cookie("sid", sid);
  session[sid] = {
    username : sid,
    turns : 0,
    guessedWord: {},
    secretWord : words[Math.floor(Math.random() * words.length)],
    message : "",
    };
  res.redirect('/');
});

app.get('/', (req,res) => {  //redirect to get 
  const sid = req.cookies.sid;
  if(!sid || !session[sid]) {
    res.send('Please log in first to play the game, <a href="./login.html">Login Now</a>');
  }
    console.log(session[sid].secretWord); // pass in the secret word  how to export secret word?
    res.send(gamePanel.gamePage(session[sid].guessedWord, session[sid].turns, session[sid].message ));
});

// guess word enter to 
app.post('/trial', (req, res) => {
  const trial = req.body.trial;
  const sid = req.cookies.sid;
  
  if ( !comparedWords.contains(words, trial)) {
    session[sid].message = "Invalid word";
    // res.status(403).send('Warning: Invalid word. <a href="/">Got it</a>');
     //return;
  }

   // check isEqual() to the secret word
  else if (session[sid].secretWord.toLowerCase() === trial.toLowerCase()){
    session[sid] = {
      turns : 0,
      guessedWord: {},
      secretWord : words[Math.floor(Math.random() * words.length)],
      message : `You guess the right word in ${session[sid].turns+1} turns and new game has started`,
      };
  //   console.log("Yes, you get the word in ${turns} times, and you can now change new words");
  // return;
  }

  else if( comparedWords.contains(Object.keys(session[sid].guessedWord), trial)){
    //res.status(403).send('Warning: this word has been guessed. <a href="/">Try again</a>');
    session[sid].message = "Repeated Word";
  }

  else { 
      // comparedWords.guessedWordList.push(trial);
       //comparedWords.wordMatchesList.push(compare(words, trial));
      const Match = comparedWords.compare(session[sid].secretWord,trial) 
      session[sid].guessedWord[trial]= Match;
      session[sid].turns++;
      //res.send('Miss. <a href="/">Try again</a>');
      session[sid].message = "Missed";     
    }
    res.redirect('/');
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
