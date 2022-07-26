let button = document.querySelector('button');
let image = document.querySelector('img');
let url = 'https://dog.ceo/api/breeds/image/random'

/*
Promise Syntax 1: .then()
    Utilizes ".then()" calls after you fetch
*/

// button.addEventListener('click', () => {
//     fetch(url)
//         .then((res) => {
//             return res.json();
//         })
//         .then((data) => {
//             image.src = data.message;
//         })
// })


/*
Promise Syntax 2: Async-Await
    Async = declare a function as asynchronous by putting the term async before it. This gives you access to using await in your function body.
    Await = allows us to wait for our http response before we continue running our asynchronous code
*/

// button.addEventListener('click', async () => {
//     let res = await fetch(url);
//     let data = await res.json();
//     image.src = data.message
// })

/* 
Writing a function outside of the eventListener() so we can call it anytime in any listener
*/

let apiCall = async () => {
    let res = await fetch(url);
    let data = await res.json();
    image.src = data.message
}

button.addEventListener('click', async () => {
    apiCall();
    })

