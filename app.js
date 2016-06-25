function domFind(selector){
    return document.querySelector(selector);
}

function newNode(nodeName){
    return document.createElement(nodeName);
}

function eventOn(selector, eventName, handler){
    domFind(selector).addEventListener(eventName, handler, false);
}

function handleInputChange(ev){
    if(ev.keyCode === 13){
        addTodoItem(ev.target.value);
        ev.target.value = '';
    }
}

function addTodoItem(itemName){
    var todoList = domFind('.todo-list');
    var listItem = newNode('li');
    listItem.innerHTML = itemName;
    todoList.appendChild(listItem);
}

eventOn('.input-box', 'keypress', handleInputChange);