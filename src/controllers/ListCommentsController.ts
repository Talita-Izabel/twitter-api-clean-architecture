import { ListCommentsUseCase } from "../core/useCases/ListCommentsUseCase";
import { TweetMemoryRepository } from "../infra/repositories/TweetMemoryRepository";
import { TweetMessageMemoryRepository } from "../infra/repositories/TweetMessageMemoryRepository";
import { UserMemoryRepository } from "../infra/repositories/UserMemoryRepository";

export class ListCommentsController{
  static async listComments(params, body){
    const tweetRepository = new TweetMemoryRepository();
    const userRepository = new UserMemoryRepository();
    const tweetMessageRepository = new TweetMessageMemoryRepository();
    const useCase = new ListCommentsUseCase(userRepository, tweetRepository, tweetMessageRepository);
    const result = await useCase.execute({userId: params.user, tweetId: params.tweetId});

    return result;
  }
}