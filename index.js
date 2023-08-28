function app() {
    
    let addTask = document.querySelector('.add');

    addTask.addEventListener("click", function() {
        let list = document.querySelector('.list');
        
        let li = document.createElement('li');
        let id = Math.floor(Math.random() * 100);
        li.id = id;
        
        let input = document.querySelector('.task').value;

        let value = document.createTextNode(input);
        let task = document.createElement('p')
        task.appendChild(value);
        task.className = ('new-item');

        let buttonContainer = document.createElement('div');
        buttonContainer.className = ('button-container');

        let doneButton = document.createElement('span');
        doneButton.innerHTML = (`<button class='done'>Done</button`)
        
        let deleteButton = document.createElement('span');
        deleteButton.innerHTML = (`<button class='delete'>Delete</button`)


        li.appendChild(task);
        buttonContainer.appendChild(doneButton);
        buttonContainer.appendChild(deleteButton);
        li.appendChild(buttonContainer);
        list.appendChild(li);
        doneButton.addEventListener("click", function(){
            if (li.id == id)
                task.style.textDecoration = "line-through";
        });
        deleteButton.addEventListener("click", function(){
           if (li.id == id)
                list.removeChild(li);
                li.style.textDecoration = "none";
        });
    });
}

app();