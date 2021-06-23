import { IEncrypter } from './protocols'
import { hashSync, genSaltSync } from 'bcrypt';

export class BcryptEncrypterAdapter implements IEncrypter{
  encrypt(plainText: string): string {
    return hashSync(plainText, genSaltSync(10))
  }

}