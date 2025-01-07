
async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log(response.status);
    console.log(response.ok);

    if (!response.ok) {
        console.log("Error: ");
        const data = await response.json();

    }
    const data = await response.json();

    return data;
}

fetchData()
    .then(data => {
        console.log(data);
    })

    .catch(error => {
        alert(' error fetashing data  Please Contact us: ' + error.name);
    });
