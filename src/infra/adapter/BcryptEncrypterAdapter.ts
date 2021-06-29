import { IEncrypter } from './protocols'
import { hashSync, genSaltSync, compareSync } from 'bcrypt';

export class BcryptEncrypterAdapter implements IEncrypter{
  encrypt(plainText: string): string {
    return hashSync(plainText, genSaltSync(10))
  }

  compare(plainText: string, hash: string): boolean{
    return compareSync(plainText, hash);
  }
}