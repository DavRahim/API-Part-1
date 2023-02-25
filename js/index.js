// console.log('i am here')

const user = {id: 11, name: 'Amir', job: 'actor'}; 
const stringify = JSON.stringify(user)

// console.log(stringify)
// console.log(user)

// {"id":11,"name":"Amir","job":"actor"} == JSON
// { id: 11, name: 'Amir', job: 'actor' } == js

const shop = {
    owner : 'ALia',
    address: {
        street: 'Jamal pur',
        city: 'Dhaka',
        country: 'BD',

    },
    Products: ['laptop', 'mobile', 'keyboard'],
    revenue : 45000,
    isOpen: true,
    isNew: false
};

console.log(shop)
const shopJSON = JSON.stringify(shop)
console.log(shopJSON)

const shopObj = JSON.parse(shopJSON)
console.log(shopObj)


//patch 
function patchPost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'foo',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}

function deletePost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
     method: 'DELETE',
    });
}

function cretePost(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}