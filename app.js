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
      var deleteButton = document.createElement('button');
      deleteButton.textContent = "Delete";
      deleteButton.onclick = deleteTask;
      newLi.appendChild(deleteButton);
      newToDoText.value = '';
    });
}

  //Delete an existing task
var deleteTask = function() {
  var newLi = this.parentNode;
  var toDoList = newLi.parentNode;

  //Remove the parent list item from the ul
  toDoList.removeChild(newLi);
}


window.onload = function(){
    onReady();
};
