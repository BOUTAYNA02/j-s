const Promises = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved!");
    }, 2000);
});

// Use the promise
Promises.then((message) => {
    console.log(message);
});
