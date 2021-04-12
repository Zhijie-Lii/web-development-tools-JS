export const checkSession = function() {
    
}

export const fetchLogin = function() {
    return fetch('session', {
        method: 'POST'
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

export const fetchLogout = function() {

};