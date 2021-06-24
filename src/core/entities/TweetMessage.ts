import { ExceptionHandler } from "../exception/ExceptionHandler";
import { User } from "./User";

export class TweetMessage{
  id: string;
  text: string;
  user: User;
  date: Date;
  //comments: TweetReplies[];

  constructor(id:string, text:string, user:User, date:Date){
    ExceptionHandler.throwWhen(!id, new Error('ID is required!'));
    ExceptionHandler.throwWhen(!date, new Error('Date is required!'));

    this.id = id;
    this.text = text;
    this.user = user;
    this.date = date;
  }

  
}