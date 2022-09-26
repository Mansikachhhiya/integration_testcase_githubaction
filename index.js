const express = require("express")
const cors = require('cors');
const logger = require('morgan');

// create an express application by calling express() function
/**
 app variable (express application) has methods for handling request and configuring
 how the application behave we can create multiple apps this way, each with
 their own request & response
 */
const app = express();

var corOptions = {
    origin : "https://localhost:8080"
}

//middleware
app.use(cors(corOptions))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(logger('dev'))

//routers

// const router = require("../sequelize_demo2/routes/productRouter")
const routers = require("./routes/index");
app.use("/api",routers)

//testing api
/**
 app.get() is function, called routes definition.
 This function takes two parameters , 1st is the route or path which
 is the relative path from the root of the server & 2nd is callback function,
 has a two arguments req * res.
 req represents the request sent from the browser to the server.
 res represents the response that the server sends back.
 */
// app.get('/',(req,res)=>{
//     res.status(200).json({message:"Hello from API"})
// })
//port
const PORT = process.env.PORT || 8000
console.log(PORT);

// server
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})
module.exports=app