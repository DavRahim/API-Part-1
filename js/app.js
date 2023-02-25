function loadData1(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
          .then(res => res.json())
          .then(data => console.log(data))    
}

function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => userArr(data))
}

function userArr(data){

    for(const datas of data){
        console.log(datas)
    }

}