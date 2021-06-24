import { ITweetMessage } from "../../infra/repositories/protocols/ITweetMessage";

export interface ITweetMessageRepository<T extends ITweetMessage>{
  findByUserID(id: string);
  saveTweet(tweet: T);
}