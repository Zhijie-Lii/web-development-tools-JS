const uuid = require('uuid').v4;

const users = {};
const sessions = {};

const isValidUsername = function( username ) {
    if(!username) { 
        return false;
    }
    const cleanUsername = username.replace(/[^a-zA-Z0-9_\-]/g, '');
    if(username !== cleanUsername) {
        return false;
    }
    if (username.search("dog")!==-1) {
        usernameErrors.push('Dog drools. Return a cat name');
    }
    return true;
};

const create = function({ username }) {
    if(!username) {
        return { error: 'username-required' };
    }
    if(!isValidUsername(username)) {
        return { error: 'username-invalid' };
    }
    const sid = uuid();
    users[username] = users[username] || {
        theme: 'light',
        lastActive: Date.now(), //stuff
    };
    sessions[sid] = {
        sid,
        username,
        startTime: Date.now(),
        info: users[username],
    };
    return {sid};
};

const remove = function(sid) {
    delete sessions[sid];
};

const isValidSession = function(sid) {
    return !!sessions[sid];
};

module.exports = {
    details: sessions,
    create,
    remove,
    isValidSession,
 };