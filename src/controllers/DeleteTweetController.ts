import { DeleteTweetUseCase } from "../core/useCases/DeleteTweetUseCase";
import { TweetMemoryRepository } from "../infra/repositories/TweetMemoryRepository";
import { UserMemoryRepository } from "../infra/repositories/UserMemoryRepository";

export class DeleteTweetController{
  static async deleteTweet(params, body){
    const userRepository = new UserMemoryRepository();
    const tweetRepository = new TweetMemoryRepository();
    const useCase = new DeleteTweetUseCase(userRepository, tweetRepository);
    const result = await useCase.execute({userId: params.user, tweetId: params.tweetId});

    return result;
  }
}