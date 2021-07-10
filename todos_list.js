
//Initialize Storage
var Todos = []


//Update Storage
function update() {
    localStorage.setItem("todos", Todos)
}


//Add Todos To Storage
function addTodo(title,description) {
    
    //Initialize The Details in Variable
    var title = document.getElementById('title').value
    var description = document.getElementById('desc').value


    Todos.push({
        Title:title,
        Description:description
    } )
    console.log(Todos);
    update()

    event.preventDefault()
}