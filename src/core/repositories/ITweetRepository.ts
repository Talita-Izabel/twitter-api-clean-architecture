import { ITweet } from "../../infra/repositories/protocols/ITweet";

export interface ITweetRepository<T extends ITweet>{
  findById(tweetId: string): Promise<T>;
  save(tweet: T): Promise<void>;
  listTweets(userId: string): Promise<T[]>;
  deleteTweet( tweet: T ): Promise<T[]>;
  alterTweet( tweet: T, text: string ): Promise<T[]>;
  likeTweet( tweet: T ): Promise<T>;
}