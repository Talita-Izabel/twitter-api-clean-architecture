import { ITweetMessage } from "./protocols/ITweetMessage";

const tweetsMessage:ITweetMessage[] = [];

export class TweetMessageMemoryRepository{
  
  async findByCommentId(commentId: string): Promise<ITweetMessage>{
    const tweetMessage = tweetsMessage.find(tweetMessage => tweetMessage.id === commentId);

    if(!tweetMessage)
      throw new Error("Tweet not found");

    return tweetMessage;
  }

  async saveMessage( tweetMessage: ITweetMessage ):Promise<void>{
    tweetsMessage.push(tweetMessage);
    tweetsMessage.forEach(value => {
      console.log("Tweet Message: ", value.id);
    })
  }
}