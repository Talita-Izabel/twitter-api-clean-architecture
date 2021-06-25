import { ITweet } from "../../infra/repositories/protocols/ITweet";

export interface ITweetRepository<T extends ITweet>{
  findById(tweetId: string): Promise<T>;
  save(tweet: T): Promise<void>;
}