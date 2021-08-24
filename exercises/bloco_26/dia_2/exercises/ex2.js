const calcular = async (a, b, c) => {
  return new Promise((res, rej) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      rej('Informe apenas números');
    }

    const result = ( (a + b) * c );

    if (result < 50) {
      rej('Valor muito baixo');
    }

    res(result);
  });
}

const genRandom = () => {
  return Math.floor(Math.random() * 100 + 1);
}

console.log(calcular(...Array.from({length: 3}).map(() => genRandom()))
  .then((res) => console.log(res))
  .catch((error) => console.log(error)))
