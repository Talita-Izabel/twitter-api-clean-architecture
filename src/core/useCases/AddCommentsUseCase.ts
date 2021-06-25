import { ITweet } from "../../infra/repositories/protocols/ITweet";
import { ITweetMessage } from "../../infra/repositories/protocols/ITweetMessage";
import { ITweetMessageRepository } from "../repositories/ITweetMessageRepository";
import { ITweetRepository } from "../repositories/ITweetRepository";
import { IUuid } from "../protocols/IUuid";
import { TweetMessage } from "../entities/TweetMessage";
import { IUsersRepository } from "../repositories/IUserRepository";
import { IUser } from "../../infra/repositories/protocols/IUser";

interface IAddCommentExecuteData{
  //id: string;

  tweetId: string;
  text: string;
  userId: string;
  //date: Date;
}

export class AddCommentsUseCase{
  tweetMessageRepository: ITweetMessageRepository<ITweetMessage>
  tweetRepository: ITweetRepository<ITweet>
  usersRepository: IUsersRepository<IUser>
  generator: IUuid
  
  constructor(tweetMessageRepository: ITweetMessageRepository<ITweetMessage>, 
    tweetRepository: ITweetRepository<ITweet>, generator: IUuid, usersRepository: IUsersRepository<IUser>){
    this.tweetMessageRepository = tweetMessageRepository;
    this.tweetRepository = tweetRepository;
    this.usersRepository = usersRepository;
    this.generator = generator;
  }

  async execute({tweetId, text, userId}: IAddCommentExecuteData){
    const tweet = await this.tweetRepository.findById(tweetId);

    if(!tweet)
      throw new Error("Invalid Tweet Code.");

    const user = await this.usersRepository.findByUserId(tweet.userId);

    //Verificar os usersId
    if(!user)
      throw new Error("User not found.");

    const date = new Date();
    const id = this.generator.idGenerator();
    const tweetMessage = new TweetMessage(id, tweetId, text, userId, date); 
    //tweetMessage.id = this.generator.idGenerator();
    //tweetMessage.date = new Date();

    await this.tweetMessageRepository.saveMessage(tweetMessage);

    return tweetMessage;
  }
}