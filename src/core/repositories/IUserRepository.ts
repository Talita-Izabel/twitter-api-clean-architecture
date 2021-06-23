import { IUser } from "../../infra/repositories/protocols/IUser";
import { User } from "../entities/User";

export interface IUsersRepository<T extends IUser> {
  findByEmail(email: string): Promise<T>;
  save(user: T): Promise<void>;
  //login(email: string, password: string): Promise<void>;
}