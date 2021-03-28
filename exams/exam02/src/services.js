export const loadRecipes = function() {
    return fetch('/recipes', {
        method: 'GET',
    })
    .catch( () => {
        return Promise.reject( { error: 'network-error' });
    })
    .then( response => {
        if (response.ok) {
            return response.json();
        }
        return response.json().then( err => Promise.reject(err) );
    });
};

export const performLogin = function( username ) {
    return fetch('/session', {
        method: 'POST',
        headers: new Headers({
            'content-type': 'application/json',
        }),
        body: JSON.stringify( { username: username }),
    })
    .catch( () => {
        return Promise.reject( { error: 'network-error'});
    })
    .then( response => {
        if (response.ok) {
            console.log(username);
            return response.json();
        }
        return response.json().then( err => Promise.reject(err) );
    });
};

export const addRecipeCallback = function() {
    return fetch('/recipe', {
        method: 'POST',
        headers: new Headers({
            'content-type': 'application/json',
        }),
        body: JSON.stringify({

        })
    })
}

export const checkLoginStatus = function() {
    return fetch('/session', {
        method: 'GET',
    })
    .catch( () => {
        return Promise.reject( { error: 'network-error' });
    })
    .then( response => {
        if (response.ok) {
            return response.json();
        }
        return response.json().then( err => Promise.reject(err) );
    });
};