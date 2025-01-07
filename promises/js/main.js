const Promises = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved!");
    }, 2000);
});

Promises.then((message) => {
    console.log(message);
});
