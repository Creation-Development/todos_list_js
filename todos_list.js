
//Initialize Storage
// if(localStorage.length == null){
var Todos = []
// }
// else {
//     var Todos = localStorage.getItem("todos")
//     console.log(typeof Todos)
// }

//Update Storage
var update = () =>  {
    var data = localStorage.setItem("todos", Todos)
    JSON.stringify(data)
}

// update()
// function getData() {
//     var data = localStorage.getItem("todos")
//     console.log(JSON.parse(data));
//     event.preventDefault()
// }

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
    getData()
    event.preventDefault()
}

