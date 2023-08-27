function app() {
    
    let addTask = document.querySelector('.add');

    addTask.addEventListener("click", function() {
        let list = document.querySelector('.list');
        
        let li = document.createElement('li');
        let input = document.querySelector('.task').value;

        let task = document.createTextNode(input)

        let doneButton = document.createElement('span');
        doneButton.innerHTML = (`<button class='done'>Done</button`)
        
        let deleteButton = document.createElement('span');
        deleteButton.innerHTML = (`<button class='delete'>Delete</button`)

        doneButton.addEventListener("click", function(){
            if (li.id == id)
                li.style.textDecoration = "line-through";
        });
        deleteButton.addEventListener("click", function(){
           if (li.id == id)
                list.removeChild(li);
                li.style.textDecoration = "none";
        });
    });
}

app();