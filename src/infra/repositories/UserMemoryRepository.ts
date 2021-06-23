import { IUsersRepository } from "../../core/repositories/IUserRepository";
import { IUser } from "./protocols/IUser";

const users:IUser[] = [];

export class UserMemoryRepository implements IUsersRepository<IUser>{
  //users: User[] = [];

  async findByEmail(email: string): Promise<IUser>{
    const user = users.find(user => user.email === email);

    return user;
  }

  async save(user: IUser): Promise<void>{
    users.push(user);
    users.forEach( value => {
      console.log(value.email);
    })
  }

  //async login(email: string, password: string): Promise<void>{}
}