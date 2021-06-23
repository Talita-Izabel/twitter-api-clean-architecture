import { User } from "../core/entities/User";
import { IUsersRepository } from "../core/repositories/IUserRepository";
import { RegisterUserUseCase } from "../core/useCases/RegisterUserUseCase";
import { BcryptEncrypterAdapter } from "../infra/adapter/BcryptEncrypterAdapter";
import { UserMemoryRepository } from "../infra/repositories/UserMemoryRepository";

export class RegisterUserController{
  static async registerUser(params, body){

    const repository = new UserMemoryRepository();
    const encrypter = new BcryptEncrypterAdapter();
    const useCase = new RegisterUserUseCase(repository, encrypter);
    const result = await  useCase.execute({ name: body.name, email: body.email, password: body.password });
    
    return result;
  }
}