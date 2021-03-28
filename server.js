const express = require('express');
const cors = require('cors');
const app = express();
const User = require('./User');     
app.use(cors());
const port = 8080;

app.listen(port,()=>{
    console.log(`App listening @ http://localhost:${port}`);
})

// new: route to users, that runs readAll()
app.get('/users', User.readAll);

app.get('/',(req,res)=>{
    res.send({exampleMessage: "React Client connected to the Express Server!"});
})