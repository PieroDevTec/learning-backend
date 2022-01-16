const express = require('express');
const router = require('./network/routers');
const db = require('./db');
db('mongodb+srv://pieroAdmin:0Q7JiQ3Gy192yQvyUuMtXOziEXx@cluster0.0a4oh.mongodb.net/telegrom?retryWrites=true&w=majority');

let app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
// app.use(router);
router(app);
// router.get('/message',function(req,res){
//   console.log(req.query);
//   console.log(req.headers);
//   console.log(req.body);
//   res.header({
//     "custom-header":"Nuestro valor personalizado",
//   })
  // res.send(`Hello ${req.body.user} , you shop orderBy is: ${req.query.orderBy}`);
//   res.send({error:"",message:"List of messages"})
// });


// app.use('/',function(req,res){
//   res.send('Hola');
// })

app.listen(3000);
console.log(`The application is listening in the port: http://localhost:3000`);
