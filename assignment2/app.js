const http = require('http');
const express = require('express');
const app = express();

// ---------------- Second Task ------------------
// app.use((req, res, next) => {
//     console.log("Welcome to first middleware");
// });
// app.use((req, res, next) => {
//     console.log("Welcome to second middleware");
// });
// ---------------------------------------------------

app.use('/users', (req, res, next) => {
    res.send("<h1> Welcome to user page </h1>");
});
app.use('/', (req, res, next) => {
    res.send("<h1> Welcome to dummy page </h1>");
});

app.listen(3000);
