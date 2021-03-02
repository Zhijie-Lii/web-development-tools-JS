function compare( word, guess ){ 
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
}

function contains (arr, obj){
    for (let i=0;  i<arr.length; i++){   //block-wide var i, otherwise i will be false
        if (arr[i].toLowerCase() === obj.toLowerCase() ){
        return true;
        }
    }
    return false;
}

const comparedWords = {
    compare,
    contains,
    // turns,
    // guessedWord,
};

module.exports = comparedWords;

// guessedWordList,
    // wordMatchesList,
    // const turns = 0;      //could not pass in turn and guessedWord for initialization? 
    // const guessedWord = [];

 //const guessedWordList = [];
    //["pig","gap"]
     // [1,2]
    // {"pig":1,
    //  "gap":2}

