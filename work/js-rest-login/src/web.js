import {
    checkLoginStatus,
    performLogin
} from './services';

import {
    callToAddNewTodo, callToChangeTodoPriority, callToDeleteTodo
} from './services';

export const showContent = function() {
    document.querySelector('#todo-app .login').classList.add('hidden');
    document.querySelector('#todo-app .logged-in').classList.remove('hidden');
}

export const showLogin = function() {
    document.querySelector('#todo-app .login').classList.remove('hidden');
    document.querySelector('#todo-app .logged-in').classList.add('hidden');
}

const showLoggedInUserName = function( username ) {
    document.getElementById("user").innerText = username;   
}

export const addLogin = function() {
    document.querySelector('#todo-app .login button').addEventListener('click', () => {
        const usernameEl = document.querySelector('#todo-app .login input');
        const username = usernameEl.value;

        performLogin(username)
        .then( userInfo => {
            showContent();
            setTimeout( checkLoginStatus, 5000 ); //
            username = userInfo.username;
            console.log(username);
            showLoggedInUserName(username);
            todos = userInfo.todos;
            renderTodos(todos);
        })
        .catch( err => {
            updateStatus(errMsgs[err.error] || err.error);
        });
    });
}

export const renderTodos = function(todos) {
    const todoListEl = document.querySelector('#todo-app .todos');
    var a= function(){
        console.log(123)
    }
    const html = todos.map( (todo, index) => { 
        console.log("In render", todo, todo["priority"]);
       
        // // let a= deleteTodo()
        // let s= '<li><button class="delete">X</button></li>';
        // return s
        return `
            <li>
                <span class="delete" data-index=${index}>X</span>
                <span class="task" data-index=${index}>${todo.task}</span>
                <span class="colon">:</span>
                <button class="degrade" data-index=${index}>-</button>
                <span class="priority" data-index=${index}>${todo.priority}</span>
                <button class="upgrade" data-index=${index}>+</button>
            </li>
        `;
    }).join('');
    console.log(todoListEl);
    todoListEl.innerHTML = html;
    deleteTodo();
}

export const errMsgs = {

}

export const updateStatus = function( screenMsgs ) {
    const status = document.querySelector('#todo-app .status')
    // console.log(typeof status);
    status.innerHTML = screenMsgs;
}

export const addNewTodo = function() {
    const addButtonEl = document.querySelector('#add-todo .add');
    const taskEl = document.querySelector('#add-todo .task');
    const priorityEl = document.querySelector('#add-todo .priority');
    addButtonEl.addEventListener('click', (e) => {
        const task = taskEl.value;
        const prio = priorityEl.value;
        callToAddNewTodo( task, prio )
        .then( (todos) => { 
            taskEl.value ='';
            priorityEl.value ='';
            renderTodos( todos );
        })
        .catch( err => {
            updateStatus(errMsgs[err.error] || err.error);
        });
        
    })
}

export const deleteTodo = function() {

    const todoListEl = document.querySelector('#todo-app .todos');
    // const deleteButtonEl = document.querySelectorAll('.delete')
    console.log(deleteButtonEl);
    todoListEl.addEventListener('click', (e) => {
        console.log(123);
        if (!e.target.classList.contains('delete')) {
            return;
        } else {
            const index = e.target.dataset.index;
            callToDeleteTodo( index )
            .then( (todos) => {
                renderTodos( todos );
                updateStatus(`Successfully delete a todo`);
                // delete 
            })
            .catch( err => {
                updateStatus(errMsgs[err.error] || err.error);
            });
        }
    })
}

export const updateTodoPriority = function() {
    const todoListEl = document.querySelector('#todo-app .todos');
    todoListEl.addEventListener('click', (e) => {
        const index = e.target.dataset.index;
        if (e.target.classList.contains('degrade')) {

        } else if (e.target.classList.contains('upgrade') ) {
        //     if ()
        }
    });
}

export const rankTodos = function( ) {

}

// const timerEl = document.querySelector('.timer');

//   const setTimer = (endAt) => {
//     const totalSeconds  = Math.max( 0, endAt - Math.floor(Date.now()/1000) );
//     const secondsLeft = totalSeconds % 60;
//     const minsLeft = (totalSeconds - secondsLeft)/60;
//     timerEl.innerText = `${minsLeft}:${secondsLeft.toString().padStart(2,'0')}`;
//   };

//   const updateTimer = () => {
//     // No error checking shown, but should be present on real code
//     return fetch('/api/controls', {
//       method: 'GET',
//     })
//     .then( response => response.json() )
//     .then( controls => setTimer(controls.timer.endAt) )
//     .then( setTimeout( updateTimer, 5000) );
//   };

//   updateTimer();

//   const setTimerButton = document.querySelector('.set-timer');
//   setTimerButton.addEventListener('click', () => {
//     const setTo = document.querySelector('.timer').value;
//     setTimerButton.disabled = true;
//     fetch('/api/controls/timer', {
//       method: 'POST',
//       headers: new Headers({
//         'content-type': 'application/json',
//       }),
//       body: JSON.stringify({timer: setTo}),
//     })
//     .finally( () => {
//       setTimerButton.disabled = false;
//     });
//   });

