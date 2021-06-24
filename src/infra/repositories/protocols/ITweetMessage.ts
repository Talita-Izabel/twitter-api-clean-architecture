import { User } from "../../../core/entities/User";

export interface ITweetMessage{
  id: string;
  text: string;
  user: User;
  date: Date;
}