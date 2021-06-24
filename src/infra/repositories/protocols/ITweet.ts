import { TweetMessage } from "../../../core/entities/TweetMessage";
import { User } from "../../../core/entities/User";

export interface ITweet{
  id: string;
  text: string;
  user: User;
  comments: TweetMessage[];
  date: Date;
}