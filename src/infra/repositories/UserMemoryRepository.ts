import { User } from "../../core/entities/User";
import { IUsersRepository } from "../../core/repositories/IUserRepository";

export class UserMemoryRepository implements IUsersRepository{
  users: User[] = [];

  async findByEmail(email: string): Promise<User>{
    const user = this.users.find(user => user.email === email);

    return user;
  }

  async save(user: User): Promise<void>{}

  async login(email: string, password: string): Promise<void>{
    
  }
}