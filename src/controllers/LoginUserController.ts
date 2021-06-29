import { UserMemoryRepository } from "../infra/repositories/UserMemoryRepository";
import { LoginUserUseCase } from "../core/useCases/LoginUserUseCase";
import { BcryptEncrypterAdapter } from "../infra/adapter/BcryptEncrypterAdapter";

export class LoginUserController{
  static async loginUser(params, body){
    const repository = new UserMemoryRepository();
    const encrypter = new BcryptEncrypterAdapter();
    const useCase = new LoginUserUseCase(repository, encrypter);
    const result = await useCase.execute({email: body.email, password: body.password});

    return result; 
  }
}