
if (localStorage.length == null) {
    var Todo = [] 
}
else {
    var json = localStorage.getItem('list')
    Todo = JSON.parse(json)
}
var tableShow = () => {
    console.log(localStorage)

    if (localStorage.getItem('list') == null){
        document.getElementById('table').innerText = "No Todos To Display"
    }
    else{
    var details = localStorage.getItem('list');
    console.log(details);
    var array = JSON.parse(details)
    console.log(array);
    let tablebody = ""
    for (let index = 0; index < array.length; index++) {
        tablebody += "<tr><th>" + (index+1) + "</th><td>" + array[index].title + "</td><td>" + array[index].desc + "</td><td><button type='button'>Delete</button></td></tr>"
        document.getElementById('tbody').innerHTML = tablebody
    }
}
}

tableShow()