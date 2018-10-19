const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongo = require('express-mongo-db');
const fs = require ('fs');


app.use('/static', express.static('static'));
app.use(bodyParser.urlencoded());
//app.use(bodyParser.json());
app.use(mongo('mongodb://localhost/itd')); // locallhost/collection
app.set('view engine', 'ejs');

app.get('',(req,res)=>{
    res.render('index');
});

app.get('/Obrigado',(req,res)=>{
    res.render('Obrigado');
});


app.post('/users/new', (req, res) => {
	
	req.db.collection('users').insert(req.body, erro => {
        if(!erro){
            return res.render('Obrigado'); //to add data on collection
        }
        return res.status(500).send({erro: "Problema ao consultar o banco de dados"});
    });
});

app.listen(process.env.PORT || 3001, () => {
    console.log('oks');
});