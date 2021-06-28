import { ExceptionHandler } from '../exception/ExceptionHandler'
import { TweetMessage } from './TweetMessage';
import { User } from './User';

export class Tweet{
  id: string;
  userId: string;
  text: string;
  date: Date;
  likes: number;
  //user: User;

  constructor(id:string, userId:string, text:string, date:Date){
    ExceptionHandler.throwWhen(!text || text.length > 180, new Error('Tweet cannot be empty or be longer than 180 characters.'))
    //ExceptionHandler.throwWhen(!id, new Error('ID is required!'))

    this.id = id;
    this.userId = userId;
    this.text = text;
    this.date = date;
    
  }


  /*addComments(tweetId:string, text: string){}

  removeComment(commentId:string){}

  editComment(commentId:string, text: string){}*/
}