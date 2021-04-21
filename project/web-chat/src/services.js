export const checkSession = function() {
    return fetch('/api/session', {
        method: 'GET'
    })
    .catch( () => {
        return Promise.reject( { error: 'network-error'});
    })
    .then( response => {
        if (response.ok) {
            return response.json();
        }
        return response.json().then( err => Promise.reject(err));
    });
}

export const createSession = function({ username }) {
    return fetch('/api/session', {
        method: 'POST',
        headers: new Headers({
            'content-type': 'application/json',
        }),
        body: JSON.stringify({ username }),
    })
    .catch( () => {
        return Promise.reject( { error: 'network-error'});
    })
    .then( response => {
        if (response.ok) {
            return response.json();
        }
        return response.json().then( err => Promise.reject(err));
    });
}

export const endSession = function() {
    return fetch('/api/session',  {
        method: 'DELETE',
    })
    .catch( () => Promise.reject({ error: 'network-error'} ) )
    .then( response => {
        if(response.ok) {
            return response.json();
        }
        return response.json().then( json => Promise.reject(json) );
    });
};

export const fetchUserList = function() {
    return fetch('/api/userList', {
        method: 'GET',
    })
    .catch( () => Promise.reject({ error: 'network-error'} ) )
    .then( response => {
        if(response.ok) {
            return response.json();
        }
        return response.json().then( json => Promise.reject(json) );
    });
};

export const fetchMessageList = function() {
    return fetch('/api/messageList', {
        method: 'GET',
    })
    .catch( () => Promise.reject({ error: 'network-error'} ) )
    .then( response => {
        if(response.ok) {
            return response.json( );
        }
        return response.json().then( json => Promise.reject(json) );
    });
}

export const fetchNewMessage = function( username, text) {
    return fetch('/api/messages', {
        method: 'POST',
        headers: new Headers({
            'content-type': 'application/json',
        }),
        body: JSON.stringify({ 
            sender: username, 
            text,
            timeStamp: Date.now(),
        })
    })
    .catch( () => Promise.reject({ error: 'network-error'} ) )
    .then( response => {
        if(response.ok) {
            return response.json();
        }
        return response.json().then( json => Promise.reject(json) );
    });
}

export const errorMessages = {
    DEFAULT: 'Oh no! Something went wrong, please try again',
    USERNAME_REQUIRED: 'Username is required',
    NETWORK_ERROR: 'There was a problem reaching your network, please try again', 
    LOGIN_REQUIRED: 'You must be logged in to view this content', 
    LOGIN_UNAUTHORIZED: 'You are not permitted to view this content',
};