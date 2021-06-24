import { IUuid } from "./protocols";
import { v4 as uuid } from 'uuid';

export class UUIDGeneratorAdapter implements IUuid{
  idGenerator():string{
    return uuid(); 
  }

}