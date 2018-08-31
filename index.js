const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const expressMongoDb = require('express-mongo-db');


app.set('view engine', 'ejs')
app.use('/static', express.static('static'));

app.use(expressMongoDb('mongodb://bruna:bruna123@ds241012.mlab.com:41012/rent-a-bruno'));

app.use(bodyParser.urlencoded());

app.get('',(req,res)=>{
    res.render('index');
});

app.get('/form',(req,res)=>{
    res.render('form');
});

app.post('/form',(req,res)=>{
    let string = `nome:${req.body.nome}\n email:${req.body.email}\n telefone:${req.body.tel}\n`;
    
    req.db.collection('/form').insert(req.body, (erro) => {
        console.log(erro);
        res.render('index');
    });
});

app.listen(process.env.PORT || 80, () =>{
    console.log('oks');
});