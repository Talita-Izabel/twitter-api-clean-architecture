import { ITweet } from "../../infra/repositories/protocols/ITweet";
import { ITweetMessage } from "../../infra/repositories/protocols/ITweetMessage";
import { IUser } from "../../infra/repositories/protocols/IUser";
import { ITweetMessageRepository } from "../repositories/ITweetMessageRepository";
import { ITweetRepository } from "../repositories/ITweetRepository";
import { IUsersRepository } from "../repositories/IUserRepository";

interface ListCommentsExecuteData{
  userId: string;
  tweetId: string;
}

export class ListCommentsUseCase{
  userRepository: IUsersRepository<IUser>
  tweetRepository: ITweetRepository<ITweet>
  tweetMessageRepository: ITweetMessageRepository<ITweetMessage>

  constructor(userRepository: IUsersRepository<IUser>, tweetRepository: ITweetRepository<ITweet>, 
    tweetMessageRepository: ITweetMessageRepository<ITweetMessage>){
      this.userRepository = userRepository;
      this.tweetRepository = tweetRepository;
      this.tweetMessageRepository = tweetMessageRepository;
  }

  async execute({userId, tweetId}: ListCommentsExecuteData){
    const user = await this.userRepository.findByUserId(userId);
    if(!user)
      throw new Error("User not found.");

    const tweet = await this.tweetRepository.findById(tweetId);
    if(!tweet)
      throw new Error("Tweet not found.");

    if(tweet.userId != userId)
      throw new Error("Tweet does not belong to this user.");

    const comments =  await this.tweetMessageRepository.listComments(tweetId);

    return comments;
  }
}