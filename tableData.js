function tableShow() {
    var data = JSON.stringify(localStorage.getItem("todo"))
    console.log(data[0].title);
    console.log(localStorage);
}
tableShow()