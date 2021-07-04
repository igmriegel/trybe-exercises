const fs = require('fs');

const nomeDoArquivo = 'meu-arquivo.txt'

try {
  const data = fs.readFileSync(nomeDoArquivo, 'utf-8');
  console.log(data);
} catch(err) {
  console.log(`Erro ao ler o arquivo ${ err.path }`);
  console.log(err);
}
