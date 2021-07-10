console.log(15);




//Initialize Storage
var Todos = []


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
    event.preventDefault()
}