import crypto from "crypto";

const SECRET = "JPMprojeto"

export const random = () =>{
   return crypto.randomBytes(128).toString("utf8"); 
};

export const authentication = (salt: string, password: string) =>{
    return crypto.createHmac("sha256",[salt,password].join("/")).update(SECRET).digest().toString() // it was added the method to string at the end
}