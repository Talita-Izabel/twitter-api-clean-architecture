import { ITweet } from "../../infra/repositories/protocols/ITweet";
import { ITweetMessage } from "../../infra/repositories/protocols/ITweetMessage";
import { ITweetMessageRepository } from "../repositories/ITweetMessageRepository";
import { ITweetRepository } from "../repositories/ITweetRepository";

interface DeleteCommentExecuteData{
  tweetId: string;
  commentId: string;
  userId: string;
}

export class DeleteCommentUseCase{
  tweetMessageRepository: ITweetMessageRepository<ITweetMessage>
  tweetRepository: ITweetRepository<ITweet>

  constructor(tweetMessageRepository: ITweetMessageRepository<ITweetMessage>, tweetRepository: ITweetRepository<ITweet>){
    this.tweetMessageRepository = tweetMessageRepository;
    this.tweetRepository = tweetRepository;
  }

  async execute({ tweetId, commentId, userId }: DeleteCommentExecuteData){

    const tweet = await this.tweetRepository.findById(tweetId);
    if(!tweet)
      throw new Error("Tweet not found.");

    const tweetComment = await this.tweetMessageRepository.findByCommentId(commentId);
    if(!tweetComment)
      throw new Error("Tweet comment not found.");

    if(tweet.userId !== userId || tweetComment.userId !== userId)
      throw new Error("User not allowed to delete Tweet");
    
    await this.tweetMessageRepository.deleteComment(tweetComment);
    
  }
}