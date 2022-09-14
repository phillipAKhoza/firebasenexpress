const express = require('express');
const auth = require('./firebase');
const app = express()
app.use(express.json())


const router = express.Router();

router.get('/get-auth',(res,req)=>{
    res.json({message:'hey'})
});

app.listen(4000,()=>{
    console.log("listening on port 4000");
})

