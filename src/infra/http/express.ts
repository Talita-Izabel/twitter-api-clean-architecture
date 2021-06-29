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

/**
 * @apiVersion 0.0.1
 * @api {post} /auth/register Registrar Usuário
 * @apiName Register
 * @apiGroup Auth
 * @apiBody { String } name Nome do usuário
 * @apiBody { String } email E-mail do usuário
 * @apiBody { String } password Senha do usuário
 * 
 * @apiSuccess { Object } result Dados do usuário
 * @apiSuccessExample Successful Response:
 * HTTP/1.1 200 OK
 * 
 * {
 *    "id": "ca6e1c38-dd53-45f2-93ea-f4256d039988",
 *    "name": "Izabel",
 *    "email": "iza@gmail.com",
 *    "password": "$2b$10$2UNE7mg2cIBIECNqI1.Mh./EAX.eDfzDTHYkrzbOpR9O41MIc6/g6"
 * }
 * 
 * @apiError UserExists Usuário já cadastrado.
 * 
 * @apiErrorExample Error:
 * HTTP/1.1 400 Bad Request
 * {
 *  error: "User already existis!"
 * }
 */
app.post('/auth/register', ExpressAdapter.call(RegisterUserController.registerUser));


/**
 * @apiVersion 0.0.1
 * @api {post} /auth/login Autenticar Usuário
 * @apiName Login
 * @apiGroup Auth
 *  
 */
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