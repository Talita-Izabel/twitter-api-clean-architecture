import { ExceptionHandler } from "../exception/ExceptionHandler";
import { User } from "./User";

export class TweetMessage{
  id: string;
  tweetId: string;
  text: string;
  userId: string;
  date: Date;
  //user: User;

  constructor(id:string, tweetId:string, text:string, userId:string, date:Date){
    //ExceptionHandler.throwWhen(!id, new Error('ID is required!'));
    ExceptionHandler.throwWhen(!date, new Error('Date is required!'));

    this.id = id;
    this.tweetId =  tweetId;
    this.text = text;
    this.userId = userId;
    this.date = date;
  }

  
}