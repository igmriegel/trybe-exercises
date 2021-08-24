const fs = require('fs/promises');

const nomeDoArquivo = 'meu-arquivo.txt';

fs.readFile(nomeDoArquivo, 'utf-8')
  .then((data) => {
    console.log(`Conteúdo do arquivo: ${ data }`)
  })
  .catch((err) => {
    console.log(`Não foi possivel ler o arquivo ${ nomeDoArquivo }\n Erro: ${err}`);
    process.exit(1);
  })
