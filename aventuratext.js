// As with JSON, use the Fetch API & ES6
fetch('/p2.txt')
    .then(response => response.text())
    .then(data => {
        // Do something with your data
        console.log(data);
    });