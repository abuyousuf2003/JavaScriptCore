console.clear();
//event-onload,onerror
// property-response,responsetext,responsetype,responseurl,statust,statustText
//function-open(),send(),setRequestHeader()

const getData=()=>{

const xhr=new XMLHttpRequest();
xhr.open('GET','https://jsonplaceholder.typicode.com/posts')
//https://jsonplaceholder.typicode.com/posts(fake api link);
//open is being used to use api;
xhr.send();
xhr.onload = () => {
let data=xhr.response();
console.log(data);
}

}

getData();