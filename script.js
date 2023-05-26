
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');


function addTask() {
 
  
    if (taskInput.value !== '') {
      const task = document.createElement('h2');
      const taskText = document.createTextNode(taskInput.value);
      task.appendChild(taskText);
  
      task.addEventListener('click', function() {
        this.classList.toggle('completed');
      });
      
      // Add Delete Button
      const removeButton = document.createElement('button');
      const buttonText = document.createTextNode('Remove');
      removeButton.appendChild(buttonText);

      //Add Edit Button
      const editButon = document.createElement('button')
      const editText = document.createTextNode('edit')
      editButon.appendChild(editText)
     // editButon.innerHTML = ('Edith')

      //Add Event listiner to edit button
      editButon.addEventListener('click', function() {
        const newText = prompt('Enter Change');

        if (newText !== null && newText !== '') {
          taskText.nodeValue = newText;
        }
      })
  
      removeButton.addEventListener('click', function() {
        taskList.removeChild(task);
      });
  
      task.appendChild(removeButton);
      task.appendChild(editButon)
      taskList.appendChild(task);
      taskInput.value = '';
    }
  }