const express = require("express");
const bodyParser = require('body-parser'); //получает данные из формы
const cors = require('cors');
const app = express();
let storage = [];

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req,res){
    res.send(storage);
});

app.get('/:id', function (req,res){
    const id = req.params.id;
    const item = storage[id];
    if (item===null || id>=storage.length) {
        res.sendStatus(404);
    } else res.send(storage[id]);
});

app.post('/',(req,res)=>{
    const newid = storage.push(req.body)-1;
    res.send(newid.toString());
});
app.put('/:id',(req,res) =>{
    const id = req.params.id;
    storage[id] = req.body;
    res.send(id.toString());
});
app.delete('/:id', (req,res) =>{
    const id = req.params.id;
    storage[id] = null;
    res.send(id.toString());
});
app.listen(3000, function() {console.log('Server started...')});
