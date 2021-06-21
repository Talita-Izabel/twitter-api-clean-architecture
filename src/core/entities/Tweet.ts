import { ExceptionHandler } from '../exception/ExceptionHandler'

export class Tweet{
  id: string;
  text: string;
  reply: string[];  
  //reply: TweetMessage[];
  date: Date;

  constructor(id:string, text:string, reply:string[], date:Date){
    ExceptionHandler.throwWhen(!id, new Error('ID cannot be empty.'))
    ExceptionHandler.throwWhen(!text || text.length > 180, new Error('Tweet cannot be empty or be longer than 180 characters.'))
    ExceptionHandler.throwWhen(!date, new Error('Date is required!'))

    this.id = id;
    this.text = text;
    this.reply = reply;
    this.date = date;
  }
}