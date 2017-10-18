function onReady(){
  //Add initial state
    const toDos = [];
  //Select element to manipulate
    const addToDoForm = document.getElementById('addToDoForm');
  //Create New To-Dos or objects for our array
    function createNewToDo() {
      const newToDoText = document.getElementById('newToDoText');
      if (!newToDoText) {return}
      toDos.push({
        title: newToDoText.value,
        complete:false
      });
  // Call renderTheUI() each time state changes
  newToDoText.value = '';
  renderTheUI(toDos);

  // Add the event listener; we want it to listen for a "submission"
    addToDoForm.addEventListener('submit', event => {
      event.preventDefault();
      createNewToDo();
      });
 // Add UI
   function renderTheUI(toDos){
    const toDoList = document.getElementById('toDoList');
    toDoList.textContent = '';
    toDos.forEach(function(toDo){
// Create UI for each to-do, assign toDo's title to li and update dom with li and checkbox
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input')
      checkbox.type = "checkbox";
// Add toDo's title text to newLi
      newLi.textContent = toDo.title;
//Update the DOM
      todoList.appendChild(newLi);
      newLi.appendChild(checkbox);
    });
    }
  }


window.onload = function(){
    onReady();
};
