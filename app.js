const express = require('express');
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;

//EXPRESS STUFFS----------------------------------->
app.use('/static' , express.static('static'));
app.use(express.urlencoded());

// PUG STUFFS-------------------------------------->
app.set('view engine' , 'pug');
app.set('views' , path.join(__dirname , 'views'));

// END POINTS----->
app.get('/' , (req , res) => {
  // console.log(req.body)
  const content = 'This is the best content on the internet so far so use it wisely'
  const params = {"title":'Gym Hub' , "content":content}
  res.status(200).render('index.pug' , params);
});

app.post('/' , (req ,res) =>{
  // console.log(req.body)
  name = req.body.name
  age = req.body.age
  gender = req.body.gender
  address = req.body.address
  let outputToWrite = `\n{ \n name: '${name}', \n age: ${age}, \n gender: '${gender}', \n address: '${address}',\n}`
  fs.appendFileSync("output.txt" , outputToWrite);
  const params = {'message': 'Your form has been submitted successfully' }
  res.status(200).render('confirmation.pug' , params)
})


//-------------------------------------------------------------------------------------------------------->
// app.get("/demo" , (req,res)=>{
//   res.status(200).render('demo', { title: 'Hey Suman', message: 'Thanks for using pug!' })
// });
// app.get("/" , (req,res)=>{
//   res.status(200).send("This is homepage of my first express app")
// });
// app.get("/about" , (req,res)=>{
//   res.send("This is get req of about page my first express app")
// });
// app.post("/about" , (req,res)=>{
//   res.send("This is post req of about page my first express app")
// });
// app.post("/t" , (req,res)=>{
//   res.status(404).send("This page is not found.")
// });
//----------------------------------------------------------------------------------------------------------->


app.listen( port , ()=>{
  console.log(`the app is running on the port: localhost:${port}`);
});