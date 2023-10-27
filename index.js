require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const server = express();
const productRouter = require('./routes/product');
const userRouter = require('./routes/user')
//db connection
// main().catch(err => console.log(err));

// async function main() {
// await mongoose.connect(process.env.MONGO_URL);
// console.log('database connected successfully');
// }
mongoose.connect(process.env.MONGO_URL,
    console.log('database connected successfully'), {
     useNewUrlParser: true,
   useUnifiedTopology: true,
 });
//middleware
server.use(cors());
server.use(express.json());

server.use(morgan('default'));
// server.use(express.static('public'));
server.use(express.static(path.resolve(__dirname,process.env.PUBLIC_DIR)));
server.use('/products',productRouter.router);//we get flexibility//productRouter-toh ek module hai
server.use('/users',userRouter.router);
server.use('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'build','index.html'))
})
// console.log("env",process.env.DB_PASSWORD);





server.listen(process.env.PORT ,()=>{
    console.log('server started')
});