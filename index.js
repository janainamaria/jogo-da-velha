const express = require('express');
const path = require('path')
const app = express()

app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3000,()=>{
console.log("SERVER ON")
})