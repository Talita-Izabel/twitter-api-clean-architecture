import { IUser } from "../../infra/repositories/protocols/IUser";
import { IEncrypter } from "../protocols/IEncrypter";
import { IUsersRepository } from "../repositories/IUserRepository";

interface ILoginExecuteData{
  email: string;
  password: string;
}

export class LoginUserUseCase{
  usersRepository: IUsersRepository<IUser>
  compare: IEncrypter

  constructor(usersRepository: IUsersRepository<IUser>, compare: IEncrypter){
    this.usersRepository = usersRepository;
    this.compare = compare;
  }

  async execute({email, password}: ILoginExecuteData){
    const isValidUser = await this.usersRepository.findByEmail(email);

    if(!isValidUser)
      throw new Error("User not found.");

    const isValidPassword = this.compare.compare(password, isValidUser.password);
      if(!isValidPassword)
        throw new Error("Invalid password");

    //await this.usersRepository.login(email, password);

    return isValidUser.id;
  }
}