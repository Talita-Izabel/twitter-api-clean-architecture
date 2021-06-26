import { ListTweetsUseCase } from "../core/useCases/ListTweetsUseCase";
import { TweetMemoryRepository } from "../infra/repositories/TweetMemoryRepository";
import { UserMemoryRepository } from "../infra/repositories/UserMemoryRepository";

export class ListTweetsController{
  static async listTweets(params, body){
    const tweetRepository = new TweetMemoryRepository();
    const userRepository = new UserMemoryRepository();
    const useCase = new ListTweetsUseCase(tweetRepository, userRepository);
    const result = await useCase.execute({userId: params.user});

    return result;
  }
}