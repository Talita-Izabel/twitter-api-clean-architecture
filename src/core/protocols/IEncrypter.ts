
export interface IEncrypter{
  encrypt(plainText: string):string;
  compare(plainText: string, hash: string): boolean;
}