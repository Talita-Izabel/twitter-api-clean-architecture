import { ITweet } from "../../infra/repositories/protocols/ITweet";
import { IUser } from "../../infra/repositories/protocols/IUser";
import { ITweetRepository } from "../repositories/ITweetRepository";
import { IUsersRepository } from "../repositories/IUserRepository";

interface ListTweetsExecuteData{
  userId: string;
}

export class ListTweetsUseCase{
  tweetRepository: ITweetRepository<ITweet>
  userRepository: IUsersRepository<IUser>

  constructor(tweetRepository: ITweetRepository<ITweet>, userRepository: IUsersRepository<IUser>){
    this.tweetRepository = tweetRepository;
    this.userRepository = userRepository;
  }

  async execute({userId}:ListTweetsExecuteData){
    const user = await this.userRepository.findByUserId(userId);
    if(!user)
      throw new Error("User not found.");

    const tweets = await this.tweetRepository.listTweets(user.id);

    return tweets;
  }
}