import mongoose from "mongoose";
//USER SCHEMA
const UserSchema = new mongoose.Schema({
    
    username : {type: String, required: true},
    email : {type: String, required: true},
    
    authentication :{
        password:{ type : String, require: true, select: false},
        salt: {type: String , select: false},
        sessionToken: { type: String, select:false},
    },
});

//MODEL 

//here you import the schema of how your user will be
export const UserModel = mongoose.model("User",UserSchema);

//here you will create your CRUD actions 

export const getUsers = () => UserModel.find(); //READ
export const getUserByEmail = (email: string) => UserModel.findOne({email}); //READ
export const getUserBySessionToken = (sessionToken: string) => UserModel.findOne({
    "authentication.sessionToken" : sessionToken
}); //READ
export const getUserById = (id: string) => UserModel.findById(id); //READ
export const createUser = (values : Record<string, any>) => new UserModel(values).save().then((user) => user.toObject()); //CREATE
export const deleteUserById = (id: string) => UserModel.findOneAndDelete({_id: id}); //DELETE
export const updateUserById = (id: string, values: Record<string,any>) => UserModel.findByIdAndUpdate({_id:id}); //UPDATE


