import { ITweetMessage } from "../../infra/repositories/protocols/ITweetMessage";
import { User } from "../entities/User";
import { ITweetMessageRepository } from "../repositories/ITweetMessageRepository";

interface ISaveMessageExecuteData {
  id: string;
  text: string;
  user: User;
  date: Date;
}

export class SaveMessageUseCase{
  tweetMessageRepository: ITweetMessageRepository<ITweetMessage>;

  constructor(tweetMessageRepository: ITweetMessageRepository<ITweetMessage>){
    this.tweetMessageRepository = tweetMessageRepository;
  }

  async execute({ text, user, date }: ISaveMessageExecuteData){
    
  }

}