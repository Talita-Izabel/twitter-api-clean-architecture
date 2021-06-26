import { RegisterUserUseCase } from "../core/useCases/RegisterUserUseCase";
import { BcryptEncrypterAdapter } from "../infra/adapter/BcryptEncrypterAdapter";
import { UUIDGeneratorAdapter } from '../infra/adapter/UUIDGeneratorAdapter';
import { UserMemoryRepository } from "../infra/repositories/UserMemoryRepository";

export class RegisterUserController{
  static async registerUser(params, body){

    const repository = new UserMemoryRepository();
    const encrypter = new BcryptEncrypterAdapter();
    const generator = new UUIDGeneratorAdapter();
    const useCase = new RegisterUserUseCase(repository, encrypter, generator);
    const result = await  useCase.execute({ name: body.name, email: body.email, password: body.password });
    return result;
  }
}