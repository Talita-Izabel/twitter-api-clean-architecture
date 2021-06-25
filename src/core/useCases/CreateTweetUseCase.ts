import { ITweet } from "../../infra/repositories/protocols/ITweet";
import { Tweet } from "../entities/Tweet";
import { ITweetRepository } from "../repositories/ITweetRepository";
import { IUuid } from "../protocols/IUuid";

interface ICreateTweet {
  //id: string;
  userId: string;
  text: string;
  //date: Date;
}

export class CreateTweetUseCase{
  tweetRepository: ITweetRepository<ITweet>
  generator: IUuid

  constructor(tweetRepository: ITweetRepository<ITweet>, generator: IUuid){
    this.tweetRepository = tweetRepository;
    this.generator = generator;
  }

  async create({userId, text}: ICreateTweet){
    const user = await this.tweetRepository.findById(userId);

    if(!user)
      throw new Error("User not found.");

    const date = new Date();
    const id = this.generator.idGenerator();
    const tweet = new Tweet(id, userId, text, date);
    /*tweet.id = this.generator.idGenerator();
    tweet.date = new Date();*/

    await this.tweetRepository.save(tweet);
    return tweet;
  }
}