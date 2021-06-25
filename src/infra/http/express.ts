import express from 'express'
import { ExpressAdapter } from '../../adapter/ExpressAdapter'
import { RegisterUserController } from '../../controllers/RegisterUserController';
import { LoginUserController } from '../../controllers/LoginUserController';
import { AddCommentController } from "../../controllers/AddCommentController";
import { CreateTweetController } from "../../controllers/CreateTweetController";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/auth/register', ExpressAdapter.call(RegisterUserController.registerUser));
app.post('/auth/login', ExpressAdapter.call(LoginUserController.loginUser));

//Cria um Tweet
app.post('/:user/tweet',ExpressAdapter.call(CreateTweetController));
//Adiciona um comentário ao tweet
app.post('/:user/tweet/:tweetId', ExpressAdapter.call(AddCommentController.addComment))

app.listen(3333, () => console.log('App is running'));