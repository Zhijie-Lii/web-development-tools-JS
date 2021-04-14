export const checkSession = function() {
    return fetch('/api/session/messages', {
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

export const fetchNewMessage = function() {
    return fetch('/session/messages', {
        method: 'PATCH',
        headers: new Headers({
            'content-type': 'application/json',
        }),
        body: JSON.stringify({  }),
    })
}