const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('<h1> fibonacci </h1>');
});

app.get('/:numberToCheck', (req, res) => {

    let numberToCheck = req.params.numberToCheck;
    
    res.send(`${numberToCheck}`);
    
    // if (checkNumber(req.params.numberToCheck)){
    //     res.send(`<h1> ${req.params.numberToCheck} is fibonacci </h1>`)
    // } 

    // else {
    //     res.send(`<h1>${req.params.numberToCheck} is not fibonacci</h1>`)
    // }
});


app.listen(PORT, console.log("We her"));