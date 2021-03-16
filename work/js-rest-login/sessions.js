const uuidv4 = require('uuid').v4;

const sessions = { };

const isValidSession = function(sid) {
    return sessions[sid];
};

const validUserName = function(username) {
    const errors = [];
    console.log(username);
    const clean = username.replace(/[^A-Za-z0-9_]+/g, '');
    console.log(clean);
    if (clean !== username) {
        errors.push('') //return error
    }
    if (!username) {
        errors.push('username was empty')
    }

    return errors.lengths ? errors : '';
};

const createSession = function(username) {
    const sid = uuidv4();
    sessions[sid] = {
        username,
        todos: [
            {
                task: 'Do the 6250',
                done: false,
                priority: 4,
            },
        ],
    };
    return sid;
}

const sessionsManage = {
    isValidSession,
    validUserName,
    createSession,
    sessions,
}


module.exports = sessionsManage;