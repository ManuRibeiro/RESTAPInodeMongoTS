import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import router from "router";


const app = express();

app.use(cors({
    credentials: true,
}))

app.use(compression()); 
app.use(cookieParser()); //because we are using cookies 
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080, () =>{
    console.log("server running on http://localhost:8080/");
})

//const password = "yNN7Gc3NwsOvHSGZ"
//mongodb+srv://ADMIN:<password>@jpm.28ajj4g.mongodb.net/?retryWrites=true&w=majority
const MONGO_URL = "mongodb+srv://ADMIN:yNN7Gc3NwsOvHSGZ@jpm.28ajj4g.mongodb.net/?retryWrites=true&w=majority"

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on("error",(error:Error) => console.log(error));

app.use('/',router());

console.log("it has reached the end point")


//updates 3/23
//it was added the toString method at the end of authentication in the helpers folder