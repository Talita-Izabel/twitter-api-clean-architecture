import { ITweet } from "./protocols/ITweet";

let tweets:ITweet[] = [];

export class TweetMemoryRepository{
  async findById(tweetId: string): Promise<ITweet>{
    const tweet = tweets.find(tweet => tweet.id === tweetId);

    return tweet;
  }

  async save(tweet: ITweet): Promise<void>{
    tweets.push(tweet);
    tweets.forEach(value => {
      console.log("Tweet: ", value.text, "Tweet User: ", value.userId);
    })
  }

  async listTweets(userId: string): Promise<ITweet[]>{
    let tweetsUser:ITweet[] = [];
    tweets.forEach(value => {
      if(value.userId === userId)
        tweetsUser.push(value);
    })

    return tweetsUser;
  }

  async deleteTweet( tweet: ITweet ): Promise<ITweet[]>{
    tweets = tweets.filter( tweetValue => {
      return tweetValue.id !== tweet.id ;
    })

    return tweets;
  }

  async alterTweet( tweet: ITweet, text: string ): Promise<ITweet[]>{
    tweets.forEach( value => {
      if(value.id === tweet.id)
        value.text = text;
    });

    return tweets;
  }

  async likeTweet( tweet: ITweet ): Promise<ITweet>{
    tweet.likes += 1;

    return tweet;
  }
}