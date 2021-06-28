import { ITweet } from "../../infra/repositories/protocols/ITweet";
import { IUser } from "../../infra/repositories/protocols/IUser";
import { ITweetRepository } from "../repositories/ITweetRepository";
import { IUsersRepository } from "../repositories/IUserRepository";

interface LikeTweetExecuteData{
  userId: string;
  tweetId: string;
  //likes: number;
}

export class LikeTweetUseCase{
  userRepository: IUsersRepository<IUser>
  tweetRepository: ITweetRepository<ITweet>

  constructor(userRepository: IUsersRepository<IUser>, tweetRepository: ITweetRepository<ITweet>){
    this.userRepository = userRepository;
    this.tweetRepository = tweetRepository;
  }

  async execute({userId, tweetId}: LikeTweetExecuteData){
    const user = await this.userRepository.findByUserId(userId);
    const tweet = await this.tweetRepository.findById(tweetId);

    if(!user)
      throw new Error("User not found.");

    if(!tweet)
      throw new Error("Tweet not found");

    if(tweet.userId != userId)
      throw new Error("User invalid!");

    return await this.tweetRepository.likeTweet(tweet);
  }
}