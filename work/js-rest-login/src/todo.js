import {
    checkLoginStatus
} from './services';

import { 
    addLogin,
    renderTodos, addNewTodo, deleteTodo,
    showContent,showLogin, rankTodos
} from './web';

let todos = [];

addLogin();

checkLoginStatus()
.then( (userInfo) => {
    showContent();
    todos = userInfo.todos;
    renderTodos(todos);
})
.catch( error => {
    showLogin();
});

addNewTodo()
.then( (userInfo) => {
    todos = userInfo.todos;
    renderTodos(todos);
    rankTodos( desc)
})

// deleteTodo()   给x加事件监听  addAbilitytoDelete()
// .then( (userInfo) => {
//     todos = userInfo.todos;
//     renderTodos(todos);
//     rankTodos( desc )
// });
