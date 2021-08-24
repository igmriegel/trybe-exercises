/**
 * 
 * @param  media Valor da média do aluno
 * @returns Situação do aluno: aprovado ou reprovado
 */
function calculaSituacao(media) {
  if (media > 7) {
    return 'aprovado';
  }

  return 'reprovado';
}

module.exports = calculaSituacao;
