const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs')
app.use('/static', express.static('static'));
app.listen(80, () =>{
    console.log('oks');
});
app.use(bodyParser.urlencoded());

app.get('',(req,res)=>{
    res.render('index');
});

app.get('/form',(req,res)=>{
    res.render('form');
});

app.post('/form',(req,res)=>{
    let string = `nome:${req.body.nome}\n email:${req.body.email}\n telefone:${req.body.tel}\n`;
    
    fs.writeFile('cadastro.txt', string,{flag:'a'},(err)=>{
       res.render('index');
    });
});