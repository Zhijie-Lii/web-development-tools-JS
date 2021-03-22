const uuidv4 = require('uuid').v4;

const sessions = { };

const isValidSession = function(sid) {
    return sessions[sid];
};

const validUserName = function(username) {
    const errors = [];
    const clean = username.replace(/[^A-Za-z0-9_]+/g, '');
    console.log(clean);
    if (clean !== username) {
        errors.push('Invalid username'); 
    }
    if (username === "dog") {  
        errors.push('Dog drools');
    }
    if (!username) {
        errors.push('Username was empty');
    }

    return errors.length ? errors : ''; 
};

const createSession = function(username) {
    const sid = uuidv4();
    let id = Date.parse(new Date());
    sessions[sid] = {
        username,
        todos: [
            {
                task: 'Do the 6250',
                done: false,
                priority: 4,
                id:id,
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