const express = require('express')
const srv = express();
const todoRoute = require('./routes/todos')

srv.use(express.json())
srv.use(express.urlencoded({extended:true}))

srv.get('/hello',(req,res)=>{
    res.send('Hello')
})

srv.use('/public',express.static(__dirname+'/public'))//express.static makes public a static website

srv.use('/todos', todoRoute)

srv.listen(4545);