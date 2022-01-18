# Agora é sua vez!

### Exercício : Crie os controllers do seu projeto com as seguintes rotas:

- `GET /books` - lista todos os livros;
- `GET /book/:id` - pega o livro com o id especificado;
- `POST /book` - cria um novo livro;
- `POST /book/:id` - sobrescreve o livro com ID selecionado;
- `DELETE /book/:id` - deleta um livro;

Em caso de erro, os endpoints devem retornar status code 500 com a mensagem: 'Algo deu errado'.
Dica : Para testar suas requisições você pode utilizar o Postman ou o Insomnia .

## Bônus

- Crie um seeder usando o Sequelize-CLI , populando a sua base com pelo menos um livro;
- Crie um endpoint para buscar o livro por author (pode adaptar algum que já exista);
- Crie uma ordenação no endpoint GET /books para ordenar por ordem alfabética e por data de criação;
- Adicione, também, uma data de update nos atributos do livro que se altera sempre que o livro for atualizado.
- Escreva testes para os models criados;
- Escreva testes para os controllers do seu projeto isolando a camada de models .
