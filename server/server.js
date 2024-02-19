const express=require('express')
const  app = express();
const fs = require('fs');
const path=require('path')

app.use(express.json())
const dataFilePath = path.join(__dirname, 'data.json');

const data = JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));

//routes 
app.get('/',(req,res)=>{
  res.send(data)
})


const port = 8080

app.listen(port,()=>console.log('server is running at port ' ,port))