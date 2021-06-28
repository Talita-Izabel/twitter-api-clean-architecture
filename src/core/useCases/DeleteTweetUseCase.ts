import { ITweet } from "../../infra/repositories/protocols/ITweet";
import { IUser } from "../../infra/repositories/protocols/IUser";
import { ITweetRepository } from "../repositories/ITweetRepository";
import { IUsersRepository } from "../repositories/IUserRepository";

interface DeleteTweetExecuteData{
  userId: string;
  tweetId: string;
}

export class DeleteTweetUseCase{
  userRepository: IUsersRepository<IUser>
  tweetRepository: ITweetRepository<ITweet>

  constructor(userRepository: IUsersRepository<IUser>, tweetRepository: ITweetRepository<ITweet>){
    this.userRepository = userRepository;
    this.tweetRepository = tweetRepository;
  }

  async execute({userId, tweetId}: DeleteTweetExecuteData){
    const tweet = await this.tweetRepository.findById(tweetId);
    if(!tweet)
      throw new Error("Tweet not found.");

    if(tweet.userId != userId)
      throw new Error("User not allowed to delete Tweet");

    const tweets = await this.tweetRepository.deleteTweet(tweet);

    return tweets;
  }

}