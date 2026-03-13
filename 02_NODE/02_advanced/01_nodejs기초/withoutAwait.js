fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => console.log(users))
    .catch(err =>
        console.error(err)
    )