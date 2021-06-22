import express from 'express'
import { ExpressAdapter } from '../../adapter/ExpressAdapter'
import { RegisterUserController } from '../../controllers/RegisterUserController';


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/user/register', ExpressAdapter.call(RegisterUserController.registerUser));

app.listen(3333, () => console.log('App is running'));