import { ExceptionHandler } from '../exception/ExceptionHandler'
import { TweetReplies } from './TweetReplies';
import { User } from './User';
import { v4 as uuid } from 'uuid';

export class Tweet{
  id: string;
  text: string;
  //reply: string[];  
  user: User;
  //reply: TweetReplies[];
  replies: TweetReplies[];
  date: Date;

  constructor(id:string, text:string, date:Date, replies?:TweetReplies[]){
    ExceptionHandler.throwWhen(!text || text.length > 180, new Error('Tweet cannot be empty or be longer than 180 characters.'))
    //ExceptionHandler.throwWhen(!date, new Error('Date is required!'))

    this.id = uuid();
    this.text = text;
    this.replies = replies;
    this.date = new Date();
    
  }
}