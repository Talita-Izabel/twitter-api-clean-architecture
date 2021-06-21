import {User} from "./User"

describe('User', () => {
  it('Irá criar usuário se os dados estiverem certos', () => {
    const user = new User('user', 'Talita', 'talita@gmail.com')
    expect(user.id).toEqual('user')
    expect(user.name).toEqual('Talita')
    expect(user.email).toEqual('talita@gmail.com')
  })

  it('Irá lançar uma exceção se o ID for inválido', () => {
    const user = () => new User(undefined, 'Talita', 'talita@gmail.com')
    expect(user).toThrow(Error)
  })

  it('Irá lançar uma exceção se o nome estiver vazio', () => {
    const user = () => new User('user', undefined, 'talita@gmail.com')
    expect(user).toThrow(Error)
  })
  
  it('Irá lançar uma exceção se o e-mail estiver vazio', () => {
    const user = () => new User('user', 'Talita', undefined)
    expect(user).toThrow(Error)
  })
})