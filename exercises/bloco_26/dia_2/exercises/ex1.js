const calcular = (a, b, c) => {
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

(async function () {
  console.log(await calcular(1, 2, 3))
})()
