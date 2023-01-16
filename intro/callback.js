//setTimeout(() => {console.log('Hello')}, 2000)

//setInterval(() => {console.log("Merhaba ben  her saniye çalışacağım.")}, 1000)

/*const sayHİ = (cb) => {
    cb()
}

sayHİ(() => {
    console.log('Hello')
})*/

import fetch from "node-fetch";
import axios from 'axios';

/* fetch("https://jsonplaceholder.typicode.com/users")
.then((data) => data.json())
.then(users => {
    console.log("Users yüklendi!", users)

    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(data => data.json())
    .then(post => {
        console.log("Post 1 yüklendi!", post)

        fetch("https://jsonplaceholder.typicode.com/posts/2")
        .then(data => data.json())
        .then(data => console.log("Post 2 yüklendi!", data))
    })
}) */

/* async function getData(){
    const users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json()
    const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json()
    const post2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json()

    console.log('Users', users)
    console.log('Post1', post1)
    console.log('Post2', post2)
}

getData() */

/* (async () => {
    const users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json()
    const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json()
    const post2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json()

    console.log('Users', users)
    console.log('Post1', post1)
    console.log('Post2', post2)
})() */

/* (async () => {
    const {data: users} = await axios("https://jsonplaceholder.typicode.com/users")
    const {data: post1} = await axios("https://jsonplaceholder.typicode.com/posts/1")
    const {data: post2} = await axios("https://jsonplaceholder.typicode.com/posts/2")

    console.log('Users', users)
    console.log('Post1', post1)
    console.log('Post2', post2)
})() */

const getUsers = () => {
    return new Promise(async (resolve, reject) => {
        //console.log('comments')
        //resolve('Comments')

        const {data} = await axios("https://jsonplaceholder.typicode.com/users")
        resolve(data)
        //reject('Bir problem oluştu!')
    })
}




const getPost = (post_id) => {
    return new Promise(async (resolve, reject) => {

        const {data} = await axios("https://jsonplaceholder.typicode.com/posts/" + post_id)
        resolve(data)
        //reject('Bir problem daha oluştu!')
    })
}



/* (async () => {
await getUsers()
.then((data) => console.log(data))
.catch((e) => console.log(e))

await getPost(1)
.then((data) => console.log(data))
.catch((e) => console.log(e))
})() */

/* (async () => {
    try{
        const user = await getUsers()
        const post = await getPost(1)
        console.log(user)
        console.log(post)

    } catch(e) {
        console.log(e)
    }   
})() */

Promise.all([getUsers(), getPost(1)]).then(console.log).catch(console.log)