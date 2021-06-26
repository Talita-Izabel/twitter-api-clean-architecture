import { ITweetMessage } from "../../infra/repositories/protocols/ITweetMessage";
import { ITweetMessageRepository } from "../repositories/ITweetMessageRepository";

interface AlterCommentExecuteData{
  userId: string;
  commentId: string;
  text: string;
}

export class AlterCommentUseCase{
  tweetMessageRepository: ITweetMessageRepository<ITweetMessage>

  constructor(tweetMessageRepository: ITweetMessageRepository<ITweetMessage>){
    this.tweetMessageRepository = tweetMessageRepository;
  }

  async execute({userId, commentId, text}:AlterCommentExecuteData){
    const tweetMessage = await this.tweetMessageRepository.findByCommentId(commentId);
    if(!tweetMessage)
      throw new Error("Tweet Comment not found.");

    if(userId !== tweetMessage.userId)
      throw new Error("User not allowed to modify Tweet.");

    await this.tweetMessageRepository.alterComment(tweetMessage, text);    

    return tweetMessage;
  }
}