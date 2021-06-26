import { ITweetMessage } from "../../infra/repositories/protocols/ITweetMessage";

export interface ITweetMessageRepository<T extends ITweetMessage>{
  findByCommentId(commentId: string): Promise<T>;
  saveMessage( tweetMessage: T ):Promise<void>;
  deleteComment( tweetComment: T):Promise<void>;
  alterComment( tweetComment: T, text: string ): Promise<void>;
  listComments( tweetId: string ): Promise<void>;
}