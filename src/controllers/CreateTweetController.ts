import { CreateTweetUseCase } from "../core/useCases/CreateTweetUseCase";
import { UUIDGeneratorAdapter } from "../infra/adapter/UUIDGeneratorAdapter";
import { TweetMemoryRepository } from "../infra/repositories/TweetMemoryRepository";
import { UserMemoryRepository } from "../infra/repositories/UserMemoryRepository";

export class CreateTweetController{
  static async createTweet(params, body){
    const tweetRepository = new TweetMemoryRepository();
    const generator = new UUIDGeneratorAdapter();
    const userRepository = new UserMemoryRepository();
    const useCase = new CreateTweetUseCase(tweetRepository, generator, userRepository);
    const result = await useCase.create({userId: params.user, text:body.text});

    return result;
  }
}