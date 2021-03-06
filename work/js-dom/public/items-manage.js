//"use strict;"
(function IIFE(){
    const itemlist = [
        {
            itemName: 'Pen',
            quantity: 20,
        },
        {
            itemName: 'Printer',
            quantity: 0,
        },
        {
            itemName: 'Notebook',
            quantity: 10,
        },
    ];

    const listEl = document.querySelector('#item-app .itemlist');
    const inputEl = document.querySelector('#item-app input');
    const buttonEl = document.querySelector('#item-app button');
    // const decreEl = document.querySelector('#item-app .decrement');
    // const increEl = document.querySelector('#item-app .increment');

    //setup functions
    disableButtonIfNoInput();
    addAbilityToAddItems();
    addAbilityToDeleteItems();
    addAbilityToIncreItemsQuant();
    addAbilityToDecreItemsQuant();

    render(itemlist);

    function render( itemlist ){
        const html = itemlist.map((item, index) =>{
            return `
            <li>
              <span class="item " data-index="${index}">${item.itemName}</span>
              <span class="delete" data-index="${index}">X</span>

              <span class="colon">:</span>
              <span class="decrement" data-index="${index}">-</span>
              <span class="item quantity" data-index="${index}">${item.quantity}</span>
              <span class="increment" data-index="${index}">+</span>
            </li>
            `;
        }).join('');

        listEl.innerHTML = html;

        buttonEl.disabled = !inputEl.value;

        //decreEl.disabled 

    };

    function disableButtonIfNoInput(){
        inputEl.addEventListener('input', ()=>{
            buttonEl.disabled = !inputEl.value;
        });
    }

    function addAbilityToDecreItemsQuant(){
        listEl.addEventListener('click', (e) => {
            if(!e.target.classList.contains('decrement')){
                return;
            }

            const index = e.target.dataset.index;
            if (itemlist[index].quantity == 0){
                e.target.decrement.disabled = true;
            } else { 
                itemlist[index].quantity--;
            }
            render(itemlist);
        });
    }

    function addAbilityToIncreItemsQuant(){
        listEl.addEventListener('click', (e) => {
            if(!e.target.classList.contains('increment')){
                return;
            }

            const index = e.target.dataset.index;
            itemlist[index].quantity++;
            render(itemlist);
        });
    }

    function addAbilityToAddItems(){
        buttonEl.addEventListener('click',  (e) => {
            const newItem = {
                itemName : inputEl.value,
                quantity : 0,
            };
            itemlist.push(newItem);
            inputEl.value = '';
            render(itemlist);
        });
    }

    function addAbilityToDeleteItems(){
        listEl.addEventListener('click', (e) => {
            if(!e.target.classList.contains('delete')) {
                return;
            }

            const index = e.target.dataset.index;
            itemlist.splice(index, 1);
            render(itemlist);
        });
    }
    
})();
