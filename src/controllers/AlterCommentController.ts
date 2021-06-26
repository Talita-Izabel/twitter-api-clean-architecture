import { AlterCommentUseCase } from "../core/useCases/AlterCommentUseCase";
import { TweetMessageMemoryRepository } from "../infra/repositories/TweetMessageMemoryRepository";

export class AlterCommentController{
  static async alterComment(params, body){
    const tweetMessageRepository = new TweetMessageMemoryRepository();
    const useCase = new AlterCommentUseCase(tweetMessageRepository);
    const result = await useCase.execute({userId: params.user, commentId: params.commentId, text: body.text});

    return result;
  }
}