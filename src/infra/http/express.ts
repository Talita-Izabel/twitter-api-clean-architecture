import express from 'express'
import { ExpressAdapter } from '../../adapter/ExpressAdapter'
import { RegisterUserController } from '../../controllers/RegisterUserController';
import { LoginUserController } from '../../controllers/LoginUserController';
import { AddCommentController } from "../../controllers/AddCommentController";
import { CreateTweetController } from "../../controllers/CreateTweetController";
import { DeleteCommentController } from "../../controllers/DeleteCommentController";
import { AlterCommentController } from "../../controllers/AlterCommentController";
import { ListTweetsController } from "../../controllers/ListTweetsController";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/auth/register', ExpressAdapter.call(RegisterUserController.registerUser));
app.post('/auth/login', ExpressAdapter.call(LoginUserController.loginUser));

//Cria um Tweet
app.post('/:user/tweet',ExpressAdapter.call(CreateTweetController.createTweet));
app.get('/:user/timeline', ExpressAdapter.call(ListTweetsController.listTweets))

//Adiciona um comentário ao tweet
app.post('/:user/tweet/:tweetId/comments', ExpressAdapter.call(AddCommentController.addComment))
app.delete('/:user/tweet/:tweetId/comments/:commentId',  ExpressAdapter.call(DeleteCommentController.deleteTweet));
app.put('/:user/tweet/:tweetId/comments/:commentId', ExpressAdapter.call(AlterCommentController.alterComment));

app.listen(3333, () => console.log('App is running'));