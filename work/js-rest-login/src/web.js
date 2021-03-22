import {
    checkLoginStatus,
    performLogin
} from './services';

import {
    callToAddNewTodo, callToChangeTodoPriority, callToDeleteTodo
} from './services';


const usernameEl = document.querySelector('#todo-app .login input');
const todoListEl = document.querySelector('#todo-app .todos');
const addButtonEl = document.querySelector('#add-todo .add');
const taskEl = document.querySelector('#add-todo .task');
const priorityEl = document.querySelector('#add-todo .priority');
const status = document.querySelector('#todo-app .status');
const sortEle = document.querySelector('#sortBtn');

let todoTemp = [];

const errMsgs = { }

addLogin();

checkLoginStatus()
.then( (userInfo) => {
    showContent();
    renderTodos(userInfo.todos);
})
.catch( error => { 
    JSON.stringify(error);
    showLogin();
});

addNewTodo();
deleteTodo(); 
updateTodoPriority();
changeRanking( );


function showContent() {
    document.querySelector('#todo-app .login').classList.add('hidden');
    document.querySelector('#todo-app .logged-in').classList.remove('hidden');
    document.querySelector('#add-todo').classList.remove('hidden');
}

function showLogin() {
    document.querySelector('#todo-app .login').classList.remove('hidden');
    document.querySelector('#todo-app .logged-in').classList.add('hidden');
    document.querySelector('#add-todo').classList.add('hidden');
}

function addLogin() {
    document.querySelector('#todo-app .login button').addEventListener('click', () => {
        // showLogin();
        const username = usernameEl.value;
        performLogin(username)
        .then( userInfo => {
            showContent();
            // let todos = userInfo.todos;
            renderTodos(userInfo.todos);
            updateStatus(`logged in as ${username}`); 
            setTimeout( checkLoginStatus, 5000 ); 
        })
        .catch( err => {
            usernameEl.value = '';
            updateStatus( Object.values(err));
        });
    });
}

function renderTodos(todos) {
    todoTemp = todos;
    const html = todos.map( (todo) => { 
        // console.log("In render", todo, todo.priority);
        return `
            <li>
                <span class="delete" data-index=${todo.id}>X</span>
                <span class="task" data-index=${todo.id}>${todo.task}</span>
                <span class="colon">:</span>
                <button class="degrade" data-index=${todo.id}>-</button>
                <span class="priority" data-index=${todo.id}>${todo.priority}</span>
                <button class="upgrade" data-index=${todo.id}>+</button>
            </li>
        `;
    }).join('');
    todoListEl.innerHTML = html;
}

function updateStatus( screenMsgs ) {
    status.innerHTML = screenMsgs;
}

function addNewTodo() {
    addButtonEl.addEventListener('click', (e) => {
        const task = taskEl.value;
        const prio = parseInt(priorityEl.value);
        if (!task || !prio ) {
            addButtonEl.disabled = false;
            return;
        }
        callToAddNewTodo( task, prio )
        .then( (todos) => { 
            taskEl.value ='';
            priorityEl.value ='';
            todoTemp = todos;
            rankTodos( );
            renderTodos( todos );
            updateStatus(`Successfully add new todo`);
        })
        .catch( err => {
            updateStatus( errMsgs[err.error] || err.error);
        });
        
    })
}

function deleteTodo() {  //minor fix
    todoListEl.addEventListener('click', (e) => {
        if (!e.target.classList.contains('delete')) {
            return;
        } else {
            const index = e.target.dataset.index;
            callToDeleteTodo( index )
            .then( (todos) => {
                todoTemp = todos;
                rankTodos( );
                renderTodos( todoTemp );
                updateStatus(`Successfully delete a todo`);
                
            })
            .catch( err => {
                updateStatus(errMsgs[err.error] || err.error);
            });
        }
    })
}

function updateTodoPriority() {
    todoListEl.addEventListener('click', (e) => {
        const index = e.target.dataset.index;
        let newPriority = parseInt(e.target.parentElement.querySelector("#todo-app .priority").innerText)
        if (e.target.classList.contains('degrade')) {
            if ( newPriority > 1) {
                newPriority = newPriority-1;
                callToChangeTodoPriority(index, newPriority)
                .then( (changedTodo) => { 
                    todoTemp.map( (todo,index) => {
                        if(todo.id === changedTodo[0].id){
                            todoTemp[index]= changedTodo[0];
                        }
                    })
                    rankTodos( );
                    renderTodos( todoTemp );
                    updateStatus(`Degrade a todo`);
                })
            }
        } else if (e.target.classList.contains('upgrade') ) {
            if ( newPriority < 5) {
                newPriority = newPriority+1;
                callToChangeTodoPriority(index, newPriority)
                .then( (changedTodo) => { 
                    todoTemp.map( (todo,index) => {
                        if(todo.id === changedTodo[0].id){
                            todoTemp[index]= changedTodo[0]
                        }
                    })
                    rankTodos(  );
                    renderTodos( todoTemp );
                    updateStatus(`Upgrade a todo`);
                })
            }
        } else return; 
    });
}

function rankTodos( ) {
    todoTemp.sort( (a,b) => {
        return b.priority-a.priority;
    })
}

function changeRanking( ) { 
    let sortFlag = true;
    sortEle.addEventListener("click",()=>{
        if(sortFlag){
            todoTemp.sort( (a,b) => {
                return a.priority-b.priority;
            })   
        } else {
            todoTemp.sort( (a,b) => {
                return b.priority-a.priority;
            })   
        }
        sortFlag =!sortFlag;
        renderTodos(todoTemp);
    })
}
