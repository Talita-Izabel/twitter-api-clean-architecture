import { IUsersRepository } from "../repositories/IUserRepository";

interface ILoginExecuteData{
  email: string;
  password: string;
}

export class LoginUserUseCase{
  usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository){
    this.usersRepository = usersRepository;
  }

  async execute({email, password}: ILoginExecuteData){
    const isValidUser = await this.usersRepository.findByEmail(email);

    if(!isValidUser)
      throw new Error("User not found.");

    await isValidUser.login(email, password);

    return isValidUser.id;
  }
}