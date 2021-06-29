import { ExceptionHandler } from "../exception/ExceptionHandler";
import bcrypt from "bcrypt";

export class User{
  id: string;
  name: string;
  email: string;
  password: string;

  constructor(name:string, email: string, password:string, id?:string ){
    ExceptionHandler.throwWhen(!name, new Error('Name cannot be empty.'));
    ExceptionHandler.throwWhen(!email, new Error('Email cannot be empty.'));
    ExceptionHandler.throwWhen(!password || password.length < 6, new Error("Invalid password."));

    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password; 
  
  }

  /*register(name:string, email:string, password:string){
    this.id = uuid();
    this.name = name;
    this.email = email;
    const hash = bcrypt.hashSync(password, 10) ;
    this.password = hash;

    return this.id;
  }*/

  /*async login(email:string, password: string){
     const isValidPassword = await bcrypt.compare(password, this.password);
     if(!isValidPassword)
      throw new Error("Invalid password");

    return this.id;
  }*/

}