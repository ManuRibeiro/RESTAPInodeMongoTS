import  express from "express";
import {deleteUser, getAllUsers, updateUser} from "../controllers/users";
import { isAuthenticated, isOwner} from "../middlewares";


export default(router: express.Router) =>{
    router.get('/user',isAuthenticated,getAllUsers); 
    router.delete('/user/:id',isAuthenticated,isOwner,deleteUser);
    router.patch('/used/:id',isAuthenticated,isOwner,updateUser);
    
}
