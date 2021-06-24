import { ExceptionHandler } from '../exception/ExceptionHandler'
import { TweetMessage } from './TweetMessage';
import { User } from './User';

export class Tweet{
  id: string;
  text: string;
  user: User;
  comments: TweetMessage[];
  date: Date;

  constructor(id:string, text:string, date:Date, comments?:TweetMessage[]){
    ExceptionHandler.throwWhen(!text || text.length > 180, new Error('Tweet cannot be empty or be longer than 180 characters.'))
    ExceptionHandler.throwWhen(!id, new Error('ID is required!'))

    this.id = id;
    this.text = text;
    this.comments = comments;
    this.date = date;
    //this.date = new Date();
    
  }

  addMessage( comment: TweetMessage ){};

  removeMessage(id : User){};

  editMessage(id: User, { text }: TweetMessage ){}
}