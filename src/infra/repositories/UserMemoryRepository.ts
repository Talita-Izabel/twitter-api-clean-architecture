import { User } from "../../core/entities/User";
import { IUsersRepository } from "../../core/repositories/IUserRepository";

const users = [];

export class UserMemoryRepository implements IUsersRepository{
  //users: User[] = [];

  async findByEmail(email: string): Promise<User>{
    const user = users.find(user => user.email === email);

    return user;
  }

  async save(user: User): Promise<void>{
    users.push(user);
    users.forEach( value => {
      console.log(value.email);
    })
  }

  //async login(email: string, password: string): Promise<void>{}
}