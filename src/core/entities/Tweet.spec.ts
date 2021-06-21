import { Tweet } from "./Tweet";

describe('Tweet', () => {
  it('Irá postar um tweet caso as informações estejam corretas', () => {
    const date = new Date('2021-06-16T17:17:00')
    const tweet = new Tweet('codigo', 'Saudades festa junina', ['Saudades', 'quero'] , date )
    expect(tweet.id).toEqual('codigo')
    expect(tweet.text).toEqual('Saudades festa junina')
    expect(tweet.reply).toEqual(['Saudades', 'quero'])
    expect(tweet.date).toEqual(date)
  })

  it('Irá lançar uma exceção caso o texto ultrapasse 180 caracteres', () => {
    const date = new Date('2021-06-16T17:17:00')
    const tweet = () =>  new Tweet('codigo', 
    'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?', 
    ['Saudades', 'quero'], 
    date )

    expect(tweet).toThrow(Error)
  })

  it('Irá lançar uma exceção caso o texto esteja vazio', () => {
    const date = new Date('2021-06-16T17:17:00')
    const tweet = () =>  new Tweet('codigo', '', ['Saudades', 'quero'], date )

    expect(tweet).toThrow(Error)
  })

  it('Deve lançar uma exceção se a data de entrada estiver incorreto', () => {
    const tweet = () => new Tweet('codigo', 'Saudades festa junina', ['Saudades', 'quero'] , undefined)
    expect(tweet).toThrow(Error)
  })
})