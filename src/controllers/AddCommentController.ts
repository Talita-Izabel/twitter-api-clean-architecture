import { AddCommentsUseCase } from "../core/useCases/AddCommentsUseCase";
import { UUIDGeneratorAdapter } from "../infra/adapter/UUIDGeneratorAdapter";
import { TweetMemoryRepository } from "../infra/repositories/TweetMemoryRepository";
import { TweetMessageMemoryRepository } from "../infra/repositories/TweetMessageMemoryRepository";
import { UserMemoryRepository } from "../infra/repositories/UserMemoryRepository";

export class AddCommentController{
  static async addComment(params, body){
    const tweetRepository = new TweetMemoryRepository();
    const tweetMessageRepository = new TweetMessageMemoryRepository();
    const usersRepository = new UserMemoryRepository();
    const generator = new UUIDGeneratorAdapter();
    const useCase = new AddCommentsUseCase(tweetMessageRepository, tweetRepository, generator, usersRepository);
    const result = await useCase.execute({tweetId: params.tweetId, text: body.text, userId: params.user });

    return result;
  }
}