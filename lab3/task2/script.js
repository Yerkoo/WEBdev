const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

addBtn.addEventListener('click', () => {
    const taskText = input.value.trim();
    
    if (taskText !== "") {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';
        
        const span = document.createElement('span');
        span.textContent = taskText;
        span.className = 'task-text';
        
        const delBtn = document.createElement('button');
        delBtn.textContent = 'delete';
        delBtn.className = 'delete-btn';

      
        checkbox.addEventListener('change', () => {
            span.classList.toggle('completed');
        });

        
        delBtn.addEventListener('click', () => {
            todoList.removeChild(li);
        });

        
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(delBtn);
        todoList.appendChild(li);

        
        input.value = "";
    }
});