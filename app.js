function onReady(){
    const addToDoForm = document.getElementById('addToDoForm');
    const newToDoText = document.getElementById('newToDoText');
    const toDoList = document.getElementById('toDoList');
    addToDoForm.addEventListener('submit', event => {
      event.preventDefault();
      let title = newToDoText.value;
      let newLi = document.createElement('li');
      let checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      newLi.textContent = title;
      newLi.appendChild(checkbox);
      toDoList.appendChild(newLi);

      newToDoText.value = '';
    });
}

function rem() {
    var list = document.getElementById('toDoList'),
        items = Array.prototype.slice.call(list.childNodes),
        item;
    while (item = items.pop()) {
        if (item.firstChild && item.firstChild.checked) {
            list.removeChild(item);
        }
    }
}

window.onload = function(){
    onReady();
};
