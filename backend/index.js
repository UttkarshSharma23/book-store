const express = require('express')
const app =  express();
const port = process.env.PORT || 5000

app.get('/',(req,res)=>{
    res.send("welcome uttkarsh");
})

app.listen(port,()=>{
    console.log(`Book Store app is listening on port ${port}`);
})