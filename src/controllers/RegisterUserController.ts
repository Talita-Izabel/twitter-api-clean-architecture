import { RegisterUserUseCase } from "../core/useCases/RegisterUserUseCase";
import { UserMemoryRepository } from "../infra/repositories/UserMemoryRepository";

export class RegisterUserController{
  static async registerUser(params, body){

    const repositoy = new UserMemoryRepository();
    const useCase = new RegisterUserUseCase(repositoy);
    const result = await  useCase.execute({ name: body.name, email: body.email, password: body.password });
    
    return result;
  }
}