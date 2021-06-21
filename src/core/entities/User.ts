import { ExceptionHandler } from "../exception/ExceptionHandler";
import { v4 as uuid } from "uuid";
import bcrypt from "bcrypt";

export class User{
  id: string;
  name: string;
  email: string;
  password: string;
  //tweets: Tweet[];

  constructor(id:string, name:string, email: string, password:string ){
    ExceptionHandler.throwWhen(!id, new Error('ID is required.'));
    ExceptionHandler.throwWhen(!name, new Error('Name cannot be empty.'));
    ExceptionHandler.throwWhen(!email, new Error('Email cannot be empty.'));
    ExceptionHandler.throwWhen(!password || password.length < 6, new Error("Invalid password."));

    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    
  }

  register(name:string, email:string, password:string){
    this.id = uuid();
    this.name = name;
    this.email = email;
    const hash = bcrypt.hashSync(this.password, 10) ;
    this.password = hash;

    return this.id;
  }

  login(email:string, password: string){
    //const userID = 
  }

  comment(){}

}