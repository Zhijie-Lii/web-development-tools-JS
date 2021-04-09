export const fetchCat = function() {
    return fetch('/session', {
        method: 'GET',
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
};

export const fetchTry = function() {
    return fetch('/api/test', {
        method: 'GET',
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
};
