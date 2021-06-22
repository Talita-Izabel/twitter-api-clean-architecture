import { UserMemoryRepository } from "../infra/repositories/UserMemoryRepository";
import { LoginUserUseCase } from "../core/useCases/LoginUserUseCase";

export class LoginUserController{
  static async loginUser(params, body){
    const repository = new UserMemoryRepository();
    const useCase = new LoginUserUseCase(repository);
    const result = await useCase.execute({email: body.email, password: body.password});

    return result;
  }
}