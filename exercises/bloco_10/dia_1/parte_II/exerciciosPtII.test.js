
const { encode, decode, techList, hydrate } = require("./challenges");

describe('Implementa testes para a função encode', () => {
  it('Testa se a função é uma função', () => {
    expect(typeof encode).toBe('function');
  })
  it('Should encode a, e, i, o, u to 1, 2, 3, 4 e 5', () => {
    expect(encode('a e i o u')).toBe('1 2 3 4 5')
  })
  it('Should only encode a, e, i, o, u', () => {
    expect(encode('barra de chocolate')).toBe('b1rr1 d2 ch4c4l1t2');
  })
  it('Should return o tamanho 9', () => {
    expect(encode('tamanho 9').length).toBe('tamanho 9'.length);
  })
  // Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.
});

describe('Implementa testes para a função decode', () => {
  it('Testa se a função é uma função', () => {
    expect(typeof decode).toBe('function');
  })
  it('Should decode 1, 2, 3, 4 e 5 to a, e, i, o e u', () => {
    expect(decode('1 2 3 4 e 5')).toBe('a e i o e u')
  })
  it('Should only decode a, e, i, o, u', () => {
    expect(decode('b1rr1 d2 ch4c4l1t2')).toBe('barra de chocolate');
  })
  it('Should return o tamanho 9', () => {
    expect(encode('tamanho 9').length).toBe('tamanho 9'.length);
  })
});

  // Techlist
describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

  // Hydrate
describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});
