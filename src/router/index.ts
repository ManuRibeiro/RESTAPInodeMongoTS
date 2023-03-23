import express from "express";
import authentication from "./authentication";
import users from "./users"

var router = express.Router();

export default(): express.Router =>{
    
    authentication(router);
    users(router)
    return router;
};