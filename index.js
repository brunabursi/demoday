const express = require('express');
const app = express();

app.set('view engine', 'ejs')
app.use('/static', express.static('static'));
app.get('',(req,res)=>{
    res.render('index');
});

app.listen(80, () =>{
    console.log('oks');
});