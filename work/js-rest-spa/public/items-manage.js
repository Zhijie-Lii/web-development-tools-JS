"use strict";
(function IIFE(){

    const listEl = document.querySelector('.items');
    const status = document.querySelector('.status');
    const inputEl = document.querySelector('.add-item');
    const buttonEl = document.querySelector('.add');

    let itemlist = []; // state object like caches

    const errMsgs = {
        'duplicate': 'The input name already exists',
        'network-error': 'There was a problem connecting to the network, try again',
    };

    //setup functions   
    disableButtonIfNoInput();
    addAbilityToAddItems();
    addAbilityToDeleteItems();
    addAbilityToIncreItemsQuant();
    addAbilityToDecreItemsQuant();
    loadPage();
    // showUserStatus( );

    function updateStatus( message ) {
        status.innerText = message;
    }

    function renderItem( items ) {  // can renderQtyChgItem() only
        const html = items.map(  // turn array into new array: Map()
            (item) => `
              <li>
                <span class="delete" data-index="${item[1].itemId}">X</span><span class="name">${item[1].name}</span>
                <span class="colon">:</span>
                <span class="decrement" data-index="${item[1].itemId}">-</span>
                <span class="quantity" data-index="${item[1].itemId}">${item[1].quantity}</span>
                <span class="increment" data-index="${item[1].itemId}">+</span>
             </li>`
        ).join('');      // why only as item[1]
        listEl.innerHTML = html;
        itemlist = items;
        // console.log(itemlist);
        console.log(status.innerText);  // undefine from time to time? + show 'create/delete' message one turn later
    }

    function convertError(response) {
        if (response.ok) {
            return response.json();
        }
        return response.json()
        .then( err => Promise.reject(err) );
    }

    function showUserStatus() {
        // let userStatus = `Latest Update: ${message}`;
        status.innerHTML = userStatus;
    }

    function loadPage(){
        fetch('/inventory', {
            method: 'GET',
        })
        .catch( () => Promise.reject( { error: 'network-error' }) )
        .then( convertError )
        .then( items => { // when? STATE itemlist get used 
            renderItem( items );
            console.log( items );
            updateStatus('Initial loaded');
        })
        .catch( err => {
            updateStatus(errMsgs[err.error] || err.error);
        });
    }

    function disableButtonIfNoInput(){
        inputEl.addEventListener('input', () => {
            buttonEl.disabled = !inputEl.value;
        });
    }

    function addAbilityToDecreItemsQuant(){
        listEl.addEventListener('click', (e) => {
            if(e.target.classList.contains('decrement')){
                const itemId = e.target.dataset.index;
                // console.log(e.target.parentElement);
                let newQuantity = parseInt(e.target.parentElement.querySelector('.quantity').innerText);  
                if (newQuantity == 0) {
                    e.target.decrement.disabled = true;
                } else { 
                    fetch(`/inventory/${itemId}`, {
                        method: 'PATCH',
                        headers: new Headers({
							'content-type': 'application/json',
						}),
                        body: JSON.stringify({
                            quantity: newQuantity-1,
                        }),
                    })
                    .catch( () => Promise.reject( { error: 'network-error' }) )
                    .then( convertError )
                    .then( items => {
                        renderItem(items);
                        updateStatus(`The item has decreased one`); //${(Object.values(items[itemId])).name}
                    })
                    .catch( err => {
                        updateStatus(errMsgs[err.error] || err.error);
                    });
                }
            }
        });
    }

    function addAbilityToIncreItemsQuant(){
        listEl.addEventListener('click', (e) => {
            const itemId = e.target.dataset.index;
            //console.log(itemlist);
            let newQuantity = parseInt(e.target.parentElement.querySelector('.quantity').innerText);
            if(e.target.classList.contains('increment')){
                fetch(`/inventory/${itemId}`, {
                    method: 'PATCH',
                    body: JSON.stringify({
                        quantity: newQuantity+1,
                    }),
                    headers: new Headers({
                        "Content-type": "application/json"
                    }),
                })
                .catch( () => Promise.reject( { error: 'network-error' }) )
                .then( convertError )
                .then( items => {
                    // itemlist[itemId] = items;
                    // console.log(items);
                    renderItem(items);
                    updateStatus(`The item has increased one`); //${itemId.name} 
                })
                .catch( err => {
                    updateStatus(errMsgs[err.error] || err.error);
                });
            }
        });
    }

    function addAbilityToAddItems(){
        buttonEl.addEventListener('click',  (e) => {
            const name = inputEl.value;
            if (name) {
                fetch(`/inventory/${name}`, {
                    method: 'POST',
                    body: JSON.stringify({
                        // itemId: items.itemId,
                        name: name,
                    }),
                    headers: new Headers({
                        "Content-type": "application/json; charset=UTF-8"
                    }),
                })
                .catch( () => Promise.reject( { error: 'network-error' }) )
                .then( convertError )
                .then( items => {
                    inputEl.value ='';
                    renderItem(items);
                    updateStatus('New item added');
                    //console.log(JSON.stringify(items));
                })
                .catch( err => {
                    updateStatus(errMsgs[err.error] || err.error);
                });
            }
        });
    }

    function addAbilityToDeleteItems(){
        listEl.addEventListener('click', (e) => {
            if(!e.target.classList.contains('delete')) {
                return;
            } else {
                const itemId = e.target.dataset.index;
                fetch(`/inventory/${itemId}`, {
                    method: 'DELETE',
                })
                .catch( () => Promise.reject( { error: 'network-error'}) )
                .then( convertError )
                .then( items => {
                    renderItem(items);
                    updateStatus(`Successfully deleted ${itemId}`);
                })
                .catch( err => {
                    updateStatus(errMsgs[err.error] || err.error);
                });
            }           
        });
    }

})();
