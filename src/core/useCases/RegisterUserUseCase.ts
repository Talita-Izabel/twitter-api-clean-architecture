import { IUser } from "../../infra/repositories/protocols/IUser";
import { User } from "../entities/User";
import { IEncrypter } from "../protocols/IEncrypter";
import { IUsersRepository } from "../repositories/IUserRepository";

interface IRegisterExecuteData{
  name: string;
  email: string;
  password: string;
}

export class RegisterUserUseCase{
  usersRepository: IUsersRepository<IUser>;
  encrypter: IEncrypter;

  constructor(usersRepository: IUsersRepository<IUser>, encrypter: IEncrypter ){
    this.usersRepository = usersRepository;
    this.encrypter = encrypter;
  }

  async execute({name, email, password}: IRegisterExecuteData)  {
    const userExists = await this.usersRepository.findByEmail(email);

    if(userExists){
      throw new Error('User exists.');
    }

    
    const user = new User(name, email, password);
    user.password = this.encrypter.encrypt(password);
    
    await this.usersRepository.save(user);
    return user;
  }
}