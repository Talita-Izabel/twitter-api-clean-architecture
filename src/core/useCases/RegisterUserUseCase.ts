import { IUser } from "../../infra/repositories/protocols/IUser";
import { User } from "../entities/User";
import { IEncrypter } from "../protocols/IEncrypter";
import { IUuid } from "../protocols/IUuid";
import { IUsersRepository } from "../repositories/IUserRepository";

interface IRegisterExecuteData{
  name: string;
  email: string;
  password: string;
}

export class RegisterUserUseCase{
  usersRepository: IUsersRepository<IUser>;
  encrypter: IEncrypter;
  generator: IUuid;

  constructor(usersRepository: IUsersRepository<IUser>, encrypter: IEncrypter, generator: IUuid ){
    this.usersRepository = usersRepository;
    this.encrypter = encrypter;
    this.generator = generator;
  }

  async execute({name, email, password}: IRegisterExecuteData)  {
    const userExists = await this.usersRepository.findByEmail(email);

    if(userExists){
      throw new Error('User exists.');
    }

    const id = this.generator.idGenerator()
    const user = new User(name, email, password, id);
    user.password = this.encrypter.encrypt(password);
    
    await this.usersRepository.save(user);
    return user;
  }
}