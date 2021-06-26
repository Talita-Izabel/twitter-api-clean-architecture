import { DeleteCommentUseCase } from "../core/useCases/DeleteCommentUseCase";
import { TweetMemoryRepository } from "../infra/repositories/TweetMemoryRepository";
import { TweetMessageMemoryRepository } from "../infra/repositories/TweetMessageMemoryRepository";

export class DeleteCommentController{
  static async deleteTweet(params, body){
    const tweetRepository = new TweetMemoryRepository();
    const tweetMessageRepository = new TweetMessageMemoryRepository();
    const useCase = new DeleteCommentUseCase(tweetMessageRepository, tweetRepository);
    await useCase.execute({tweetId: params.tweetId, commentId: params.commentId, userId: params.user});

    
  }
}