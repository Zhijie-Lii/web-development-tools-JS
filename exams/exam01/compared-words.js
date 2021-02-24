const comparedWords = {
    // guessedWordList,
    // wordMatchesList,
    //  turns,       //could not pass in turn and guessedWord for initialization? 
     //guessedWord,

    compare:function( word, guess ) { 
        let matches = 0;
        const letterCount = {};

        for( let letter of word.toLowerCase() ) { 
            letterCount[letter] = letterCount + 1 || 1;
        }
        for( let letter of guess.toLowerCase() ) { 
            if( letterCount[letter] ) {
            letterCount[letter] -= 1;
            matches += 1; 
            }
        }
        return matches;
    },

    contains: function(arr, obj){
        for (i=0; i++; i<arr.length){
            if (arr[i] === obj ){
            return true;
            }
            return false;
        }
    }
};

const guessedWord = [];

const turns = 0;

module.exports = comparedWords;

// const guessedWordList = [];

// const wordMatchesList = [];

 //const guessedWordList = [];
    //["pig","gap"]
     // [1,2]
    // {"pig":1,
    //  "gap":2}

