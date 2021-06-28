import { ITweetMessage } from "../../infra/repositories/protocols/ITweetMessage";

export interface ITweetMessageRepository<T extends ITweetMessage>{
  findByCommentId(commentId: string): Promise<T>;
  saveMessage( tweetMessage: T ):Promise<void>;
  deleteComment( tweetComment: T):Promise<T[]>;
  alterComment( tweetComment: T, text: string ): Promise<T[]>;
  listComments( tweetId: string ): Promise<T[]>;
}