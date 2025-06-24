const express  = require('express');
const app = express();
app.post('/',(req,res) => {
    res.send("Sutharsan");
});
app.post('/api',(req,res) => {
    res.send("Hii");
});
app.listen(3000,()=>{
    console.log("Server is running on 3000");
});

