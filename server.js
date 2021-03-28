const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 8080;

app.listen(port,()=>{
    console.log(`App listening @ http://localhost:${port}`);
})

app.get('/',(req,res)=>{
    res.send({exampleMessage: "React Client connected to the Express Server!"});
})