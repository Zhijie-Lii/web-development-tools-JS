const uuidv4 = require('uuid').v4;

const session = { };

const isValidSession = function(sid) {
    return session[sid];
}

const validUsername = function(username){
    const usernameErrors = [];
    const clean = username.replace(/[^A-Za-z0-9_]+/g, '');
    
    if (clean!==username) {
        usernameErrors.push('Invalid character. Try again');
    }
    if (username=="dog") {
        usernameErrors.push('Dog drools. Return a cat name');
    }
    if (!username) {
        usernameErrors.push('No entry!');
    }

    return usernameErrors.length ? usernameErrors : '';
} ;;

const createSession = function(username) {
    const sid = uuidv4();
    session[sid] = {
        username : username,
    };
    return sid;
};

module.exports = {
	session,
	isValidSession,
    validUsername,
	createSession,
};