const fs = require('fs/promises');

const main = async () => {
  try {
    await fs.writeFile('./meu-arquivo.txt', 'Meu textão');
    console.log('Arquivo escrito com sucesso!');
  } catch (error) {
    console.error(`Erro ao escrever o arquivo: ${error.message}`);
  }
}

main()
