
// Nesta trecho de código , estamos importando o módulo assert do Node.js. O assert é uma biblioteca que fornece funções para realizar asserções de teste no códiggo
const assert = require('assert');
// aqui estamos importando a função idade pessoas para o arquivo de testes
const  { idadePessoas }  = require('./desafio4'); 

// Neste Trecho é como se o describe fosse nossa suite de testes e o it fosse o caso de teste dessa suite
describe('Teste Para Retornar a quantidade de pessoas e suas faixas etárias', function() {
  it('Deve retornar a quantidade correta de pessoas suas faixa etárias', function() {

    //aqui nesse trecho de código temos uma constante chamada pessoas  que esta recebendo uma lista de objetos com os dados de cada membro do time
    const pessoas = [
      { nome: 'Wilson', idade: 10, email: 'will@grupo10.com' },
      { nome: 'Uliana', idade: 12, email: 'Uli@grupo10.com' },
      { nome: 'Mona', idade: 17, email: 'Monagrupo10.com' },
      { nome: 'Raisa', idade: 18, email: 'Raisagrupo10.com' },
      { nome: 'Dani', idade: 25, email: 'Danigrupo10.com' },
    ];

    const quantidadePessoas = idadePessoas(pessoas);
    console.log(`Quantidade de pessoas: ${quantidadePessoas}`);

    // Verifica se a quantidade de pessoas é igual ao tamanho da lista de pessoas
    assert.strictEqual(quantidadePessoas, pessoas.length);
  });
});

