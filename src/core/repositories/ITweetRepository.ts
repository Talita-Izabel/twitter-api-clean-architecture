//import { ITweet } from "../../infra/repositories/protocols/ITweet";
import { TweetMessage } from "../entities/TweetMessage";
import { User } from "../entities/User";

export interface ITweetRepository{
  addMessage(comment: TweetMessage): Promise<User>;
}