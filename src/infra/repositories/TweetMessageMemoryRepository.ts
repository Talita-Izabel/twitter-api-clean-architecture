import { ITweetMessage } from "./protocols/ITweetMessage";

let tweetsMessage:ITweetMessage[] = [];

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
      console.log("Tweet Message: ", value.text);
    })
  }

  async deleteComment( tweetComment: ITweetMessage):Promise<ITweetMessage[]>{
    tweetsMessage = tweetsMessage.filter( tweet => {
      return tweet.id !== tweetComment.id;
    })

    return tweetsMessage;
  }

  async alterComment( tweetComment: ITweetMessage, text: string  ): Promise<ITweetMessage[]>{
    tweetsMessage.forEach(value => {
      if(value.id === tweetComment.id){
        value.text = text;
      }
    })

    return tweetsMessage;
  }

  async listComments( tweetId: string ): Promise<ITweetMessage[]>{
    let tweetsMessageUser:ITweetMessage[] = [];

    tweetsMessage.forEach(value => {
      if(value.tweetId === tweetId)
        tweetsMessageUser.push(value);
    })

    return tweetsMessageUser;
  }
}