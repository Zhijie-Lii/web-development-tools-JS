

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

export const fetchRecipeDetail = function(recipeId) {
    return fetch(`/recipes/${recipeId}`, {
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
}

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
            return response.json();
        }
        return response.json().then( err => Promise.reject(err) );
    });
};

export const performLogout = function() {
    return fetch('/session', {
        method: 'DELETE',
        // headers: new Headers({
        //     'content-type': 'application/json',
        // }),
    })
    .catch( () => {
        return Promise.reject( { error: 'network-error'});
    })
    .then( response => {
        console.log('goo')
        if (response.ok) {
            return response.json();
        }
        console.log('too')
        return response.json().then( err => Promise.reject(err) );
    });
};

export const addRecipeCallback = function( title, ingre, instru ) {
    return fetch('/recipe', {
        method: 'POST',
        headers: new Headers({
            'content-type': 'application/json',
        }),
        body: JSON.stringify({
            title: title,
            ingredient: ingre,
            instruction: instru,
        }),
    })
    .catch( () => {
        return Promise.reject( { error: 'network-error'});
    })
    .then( response => {
        if (response.ok) {
            return response.json();
        }
        return response.json().then( err => Promise.reject(err) );
    });
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