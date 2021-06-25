import { ITweetMessage } from "../../infra/repositories/protocols/ITweetMessage";

export interface ITweetMessageRepository<T extends ITweetMessage>{
  findByCommentId(commentId: string): Promise<T>;
  saveMessage( tweetMessage: T ):Promise<void>;
  //findByUserId( userId: string ):Promise<T>;
}