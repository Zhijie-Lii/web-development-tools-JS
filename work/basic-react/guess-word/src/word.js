const word = {
    compareAndGiveAnswer
}

function compareAndGiveAnswer(guess) {
    if (!isValid(guess)) {
        return `The word "${guess}" is Invalid! Try again`;
    }  
    if (isEqual(guess)) {
        return `Bingo! "${guess}" is the secret word`;
    } 
    let N = compare(guess);
    return `It's not the secret word. "${guess}" has ${N} numbers in common`; 
}

function isEqual(guess) {
    return (guess.toLowerCase()==="recat");
}

function isValid(guess) {
    return (guess.length===5);
}

function compare(guess) {
    let matches = 0;
    const letterCount = {};

    for ( let letter of 'recat' ){
        letterCount[letter] = letterCount[letter] + 1 || 1;
    }
    for ( let letter of guess.toLowerCase() ){
        if (letterCount[letter]) {
            letterCount[letter] -= 1;
            matches += 1;
        }
    }
    return matches;
}

module.exports = word;