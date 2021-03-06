export const checkLoginStatus = function() {
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
        updateStatus(); // pass in errMsg
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
        return Promise.reject( { error: 'network-error'} );
    })
    .then( response => {
        if (response.ok) {
            console.log(username);
            return response.json();
        }
        console.log('error',username, typeof err);
        return response.json().then(err => Promise.reject(err) );
    });
};

export const callToAddNewTodo = function( task, prio ) {
    return fetch('/todo', {
        method: 'POST',
        headers: new Headers({
            'content-type': 'application/json',
        }),
        body: JSON.stringify({
                task: task,
                done: false,
                priority: prio,
        }),
    })
    .catch( () => {
        return Promise.reject( { error: 'network-error' }) 
    })
    .then( response => {
        if (response.ok) {
            return response.json();
        }
        return response.json().then(err => Promise.reject(err) );
    });                          
};


export const callToDeleteTodo = function(index) {
    return fetch(`/todo/${index}`, {
        method: 'DELETE',
    })
    .catch( () => {
        return Promise.reject( { error: 'network-error'} )
    })
   .then( response => {
        if (response.ok) {
            return response.json();
        }
        return response.json().then(err => Promise.reject(err) );
    });    
};

export const callToChangeTodoPriority = function( index, newPriority ) {
    return fetch(`/todo/${index}`, {
        method: 'PATCH',
        headers: new Headers({
            'content-type': 'application/json',
        }),
        body: JSON.stringify({ 
                priority : newPriority,
                id:index
        }),
    })
    .catch( () => {
        return Promise.reject( { error: 'network-error'} )
    })
   .then( response => {
        if (response.ok) {
            return response.json();
        }
        return response.json().then(err => Promise.reject(err) );
    });    
}

// export const callToUpdate = function() { //pooling every 5 sec
//     return fetch('./session', {
//         method: ''
//     })
// }
