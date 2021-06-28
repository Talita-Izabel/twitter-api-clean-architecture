import { LikeTweetUseCase } from "../core/useCases/LikeTweetUseCase";
import { TweetMemoryRepository } from "../infra/repositories/TweetMemoryRepository";
import { UserMemoryRepository } from "../infra/repositories/UserMemoryRepository";

export class LikeTweetController{
  static async likeTweet(params, body){
    const userRepository  = new UserMemoryRepository();
    const tweetRepository = new TweetMemoryRepository();
    const useCase = new LikeTweetUseCase(userRepository, tweetRepository);
    const result = await  useCase.execute({userId: params.user, tweetId: params.tweetId});

    return result;
  }
}