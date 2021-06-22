import { User } from "../entities/User";

export interface IUsersRepository {
  findByEmail(email: string): Promise<User>;
  save(user: User): Promise<void>;
  //login(email: string, password: string): Promise<void>;
}