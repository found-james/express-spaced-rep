const express = require('express');
const app = express ();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('<h1>99 bottles of beer on the wall</h1> <a href="/98">take one down, pass it around</a>');
});

app.get('/:number_of_bottles', (req, res) => {
    let params = req.params.number_of_bottles;

    if (parseInt(params) !== 0){
        res.send(`<h1> ${params} bottles of beer on the wall. <a href=${params -1}>take one down pass it around</a></h1>`)
    } else {
        res.redirect('/');

    }
})




app.listen(PORT);