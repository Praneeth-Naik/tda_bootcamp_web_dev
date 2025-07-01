let tasks = [];

function addTask() {
    const textInput = document.getElementById('task-input');
    const descInput = document.getElementById('task-description');
    const text = textInput.value
    const description = descInput.value
    if (text === ''){
    }
    else{
        tasks.push({ text, description, completed: false });
        textInput.value = '';
        descInput.value = '';
        updateTasks();
    }
}

function updateTasks(filter = 'all') {
    const list = document.getElementById('task-list');
    list.innerHTML = '';

    tasks.forEach((task, index) => {
        if ((filter === 'completed' && !task.completed) || (filter === 'pending' && task.completed)) 
            return;
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : '';
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.onchange = () => toggleTask(index);
        checkbox.style.marginRight = '10px';
        checkbox.style.width = '20px';
        checkbox.style.height = '20px';
        checkbox.style.cursor = 'pointer';

        const textSpan = document.createElement('span');
        textSpan.textContent = task.text;
        textSpan.className = 'task-text';
        
        const descDiv = document.createElement('div');
        descDiv.textContent = task.description;
        descDiv.style.fontSize = '12px';
        descDiv.style.color = '#666';

        const content = document.createElement('div');
        content.appendChild(textSpan);
        if (task.description) content.appendChild(descDiv);
        content.style.flex = '1';

        const delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        delBtn.className = 'delete-btn';
        delBtn.onclick = () => deleteTask(index);

        const container = document.createElement('div');
        container.style.display = 'flex';
        container.style.alignItems = 'center';
        container.appendChild(checkbox);
        container.appendChild(content);
        container.style.flex = '1';

        li.appendChild(container);
        li.appendChild(delBtn);
        list.appendChild(li);
    });
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    updateTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    updateTasks();
}

function filterTasks(status) {
    updateTasks(status);
}
