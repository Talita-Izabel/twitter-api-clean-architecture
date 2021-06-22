import express from 'express'
import { ExpressAdapter } from '../../adapter/ExpressAdapter'
import { RegisterUserController } from '../../controllers/RegisterUserController';
import { LoginUserController } from '../../controllers/LoginUserController';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/user/register', ExpressAdapter.call(RegisterUserController.registerUser));
app.post('/user/login', ExpressAdapter.call(LoginUserController.loginUser));

app.listen(3333, () => console.log('App is running'));