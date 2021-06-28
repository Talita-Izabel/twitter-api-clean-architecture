import { AlterTweetUseCase } from "../core/useCases/AlterTweetUseCase";
import { TweetMemoryRepository } from "../infra/repositories/TweetMemoryRepository";
import { UserMemoryRepository } from "../infra/repositories/UserMemoryRepository";

export class AlterTweetController{
  static async alterTweet(params, body){
    const userRepository = new UserMemoryRepository();
    const tweetTepository = new TweetMemoryRepository();
    const useCase = new AlterTweetUseCase(userRepository, tweetTepository);
    const result = await useCase.execute({userId: params.user, tweetId: params.tweetId, text: body.text});;

    return result;
  }
}