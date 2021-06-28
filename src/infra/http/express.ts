import express from 'express'
import { ExpressAdapter } from '../../adapter/ExpressAdapter'
import { RegisterUserController } from '../../controllers/RegisterUserController';
import { LoginUserController } from '../../controllers/LoginUserController';
import { AddCommentController } from "../../controllers/AddCommentController";
import { CreateTweetController } from "../../controllers/CreateTweetController";
import { DeleteCommentController } from "../../controllers/DeleteCommentController";
import { AlterCommentController } from "../../controllers/AlterCommentController";
import { ListTweetsController } from "../../controllers/ListTweetsController";
import { ListCommentsController } from "../../controllers/ListCommentsController";
import { DeleteTweetController } from "../../controllers/DeleteTweetController";
import { AlterTweetController } from "../../controllers/AlterTweetController";
import { LikeTweetController } from "../../controllers/LikeTweetController";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/docs', express.static('./docs'));

app.post('/auth/register', ExpressAdapter.call(RegisterUserController.registerUser));
app.post('/auth/login', ExpressAdapter.call(LoginUserController.loginUser));

//Cria um Tweet
app.post('/:user/tweet',ExpressAdapter.call(CreateTweetController.createTweet));
app.post('/:user/tweet/:tweetId/like', ExpressAdapter.call(LikeTweetController.likeTweet))
app.delete('/:user/tweet/:tweetId', ExpressAdapter.call(DeleteTweetController.deleteTweet));
app.get('/:user/timeline', ExpressAdapter.call(ListTweetsController.listTweets));
app.put('/:user/tweet/:tweetId', ExpressAdapter.call(AlterTweetController.alterTweet));

//Adiciona um comentário ao tweet
app.post('/:user/tweet/:tweetId/comments', ExpressAdapter.call(AddCommentController.addComment))
app.delete('/:user/tweet/:tweetId/comments/:commentId',  ExpressAdapter.call(DeleteCommentController.deleteTweet));
app.put('/:user/tweet/:tweetId/comments/:commentId', ExpressAdapter.call(AlterCommentController.alterComment));
app.get('/:user/timeline/:tweetId/messages', ExpressAdapter.call(ListCommentsController.listComments));

app.listen(3333, () => console.log('App is running'));