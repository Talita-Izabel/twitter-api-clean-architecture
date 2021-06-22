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
    const userValid = await this.usersRepository.findByEmail(email);

    if(!userValid)
      throw new Error("User not found.");

    await userValid.login(email, password);
  }
}