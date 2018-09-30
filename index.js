const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const expressMongoDb = require('express-mongo-db');


app.set('view engine', 'ejs')
app.use('/static', express.static('static'));

app.use(bodyParser.urlencoded());

app.get('',(req,res)=>{
    res.render('index');
});

app.get('/home',(req,res)=>{
    res.render('index');
});

app.get('/form',(req,res)=>{
    res.render('form');
});
app.get('/usu',(req,res)=>{
    res.render('usu');
});
app.get('/enterprise',(req,res)=>{
    res.render('enterprise');
});
app.get('/loginUsu',(req,res)=>{
    res.render('loginUsu');
});
app.get('/login',(req,res)=>{
    res.render('login');
});

app.post('/form',(req,res)=>{
    let string = `nome:${req.body.nome}\n email:${req.body.email}\n telefone:${req.body.tel}\n`;
    
    req.db.collection('/form').insert(req.body, (erro) => {
        console.log(erro);
        res.render('index');
    });
});

app.listen(process.env.PORT || 3001, () => {
    console.log('oks');
});