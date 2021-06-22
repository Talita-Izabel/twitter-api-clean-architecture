import { User } from "../entities/User";
import { IUsersRepository } from "../repositories/IUserRepository";

interface IRegisterExecuteData{
  name: string;
  email: string;
  password: string;
}

export class RegisterUserUseCase{
  usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository ){
    this.usersRepository = usersRepository;
  }

  async execute({name, email, password}: IRegisterExecuteData)  {
    const userExists = await this.usersRepository.findByEmail(email);

    if(userExists)
      throw new Error('User exists.');

    const user = new User(name, email, password);

    await this.usersRepository.save(user);

  }
}