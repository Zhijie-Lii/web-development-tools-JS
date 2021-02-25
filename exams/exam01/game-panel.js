const words = require('./words');

const gamePanel = {  
    // ${gamePanel.displayGuessedWordsList()}
    // </br>
    // ${gamePanel.displayWordMatchesList()}

  gamePage: function(guessedWord, turns, message){
    return ` <!doctype html>
            <html>
              <head>
                <title>Guess Word!</title>
                <link rel="stylesheet" href="/game-panel.css">
              </head>
              <body>
              <h1>Guess the one from given valid words</h1>
                <div id="guess-app">
                    
                    <div class="guessed-word">
                    Guessed Words and matches:
                    ${gamePanel.displayGuessedWord(guessedWord )}
                    </div>

                    <div class="turns">
                    Turns:
                    ${gamePanel.displayGuessTurns(turns)}
                    </div>  
                    
                    <div class="valid-words">
                    Valid words:
                    [${gamePanel.displayWordsList(words)}]  
                    </div>         

                    <div class="guess-message">
                    Message:
                    ${gamePanel.displayGuessMessage(message)}
                    </div>    
                
                    <div class="guess-input">
                    ${gamePanel.displayTryForm()}
                    </div>
              </body>
            </html>
    `;
  },

  displayGuessedWord: function(guessedWord){
      //Object.Map()
    //   return `<div class="guessed-word-list>"`+
    //   Object.values(chat.users).map( user => `

    //   `).join('')+`</div`
    // return guessedWord;
    return `[` +
          Object.keys(guessedWord).map(word => `
            ${word} - ${guessedWord[word]}
          `).join('') +
        `]`;
      // `${JSON.stringify(guessedWord)}`
  },

//   displayGuessedWordsList: function(){
//       let arr1 = [];
//       for (let i in comparedWords.guessedWordList) {
//           arr1 += comparedWords.guessedWordList[i] +"\n";
//         }
//       return arr1;   
//   },

//   displayWordMatchesList: function(){
//       let arr2 = [];
//       for (let i in comparedWords.wordMatchesList){
//           arr2 += comparedWords.wordMatchesList[i] +"\n";
//       }
//       return arr2;
//   },
  
  displayGuessTurns: function(turns){
      return turns;
  },

  displayGuessMessage: function(message){
     return message;
  },

  displayWordsList: function(words){
      let list = [];
      for (let i in words) {
          list += words[i]+ "\n";
      }
    return list;
  },
  
  displayTryForm: function(){
      return `  <form action="/trial" method="POST">
                <div>
                <input type="text" name="trial">
                </div>
                <button type="submit">Say the word</button>
                </form>`;
    }
}

module.exports = gamePanel;
