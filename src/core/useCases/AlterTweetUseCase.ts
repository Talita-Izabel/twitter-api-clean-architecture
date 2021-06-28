import { ITweet } from "../../infra/repositories/protocols/ITweet";
import { IUser } from "../../infra/repositories/protocols/IUser";
import { ITweetRepository } from "../repositories/ITweetRepository";
import { IUsersRepository } from "../repositories/IUserRepository";

interface AlterTweetExecuteData{
  userId: string;
  tweetId: string;
  text: string;
}

export class AlterTweetUseCase{
  userRepository: IUsersRepository<IUser>
  tweetRepository: ITweetRepository<ITweet>

  constructor(userRepository: IUsersRepository<IUser>, tweetRepository: ITweetRepository<ITweet>){
    this.userRepository = userRepository;
    this.tweetRepository = tweetRepository;
  }

  async execute({userId, tweetId, text}: AlterTweetExecuteData){
    const user = await this.userRepository.findByUserId(userId);
    const tweet = await this.tweetRepository.findById(tweetId);

    if(!user)
      throw new Error("User not found!");

    if(!tweet)
      throw new Error("Tweet not found!");

    if(tweet.userId != userId)
      throw new Error("User not allowed to modify Tweet.");
      
    const tweets = await this.tweetRepository.alterTweet(tweet, text);

    return tweets;
  }
}