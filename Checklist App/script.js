hi = "hello"
let list = [
    {name: "test", checked: false },
    {name: "bobby", checked: false },
    {name: "aiufenv ay-u-fin-ev", checked: false } 
];


function render_list() {
    // this function will render the shopping list in the DOM
    // vender the shopping list in the DoM
    console.log('`render_list` ran')
    const shopping_list_string = generate_list_string(list)
    // insert that HTML into the DOM

    $('.js-shopping-list').html(shopping_list_string);

}

function handle_add_item() {
    // this function will add a new shopping list item
    console.log('`handle_add_item` ran')

}

function handle_check_item() {
    // this function is for when users click "check" button on a shopping list item.
    console.log('`handle_check_item` ran')

}

function handle_delete_item() {
    // this function is for when users want to delete a shopping list item
    console.log('`handle_delete_item` ran')

}

function handle_shopping_list() {
    // this function will be our callback when the page loads. it's responsible for
    // initially rendering the shopping list, and activating our individual
    // functions that handle new item submission and user clicks on the “check” and)
    // “delete” buttons for individual shopping list items.

    render_list();

    handle_add_item();

    handle_check_item();

    handle_delete_item();
}
function generate_list_string(shopping_list) {
    console.log("Generating shopping list element")
    let htmlThing = " ";
    for (let i = 0; i<shopping_list.length; i++) {
        console.log(shopping_list[i])
        htmlThing += generate_item_element(shopping_list[i]);
    }
    console.log(htmlThing)
    return htmlThing;
    }

function generate_item_element(item) {
    return `
        <li data-item-id="${item.id}">
        <span class="shopping-item js-shopping-item ${item.checked ?
            "shopping-item_checked" : ''}">${item.name}</span>
        <div class="shopping-item-controls">
        <button class="shopping-item-toggle js-item-toggle">
        <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete js-item-delete">
        <span class="button-label">delete</span>
        </button>
        </div>
        </li>`;
}

function add_item_to_list(itemName){
    console.log(`Adding "${itemName}" to shopping list`) ;
    // add an item to the CHECKLIST


}
    function handle_add_item() {
        $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        console.log('`handle_add_item` ran');
        //get the value in the form input element
        //reset the value to ""
        // add the value to list (use above empty function)
        //render list (use existing function)
        var reciptCost=document.getElementById("cost")
        item = reciptCost.innerHTML
        reciptCost.innerHTML = ""
        list.push({name: ""})
        })
    }
    
//  when the page loads, call ~handleShoppingList™
(handle_shopping_list());
