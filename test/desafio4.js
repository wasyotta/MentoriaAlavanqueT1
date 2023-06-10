
const assert = require('assert');

    function idadePessoas(listaPessoas) {

      // Nesta linha declaramos uma constante do tipo let porque ela vai iniciar com 0 e ter valor modificado quando o forEach realizar as devidas iterações no laço
      //Aqui é onde a  variável count é inicializada com o valor zero, ela será usada para contar o número de pessoas na lista.
      let count = 0;  
    
      //Aqui, estamos usando o método forEach para iterar sobre cada elemento da listaPessoas. 
      //A função de callback passada para o forEach será executada para cada pessoa na lista
      listaPessoas.forEach(function(pessoa) {
        const { nome, idade, email } = pessoa;
    
        // A variável faixa etária foi atribuida com let, pois o let pode receber um valor que pode ser modificado em outro momento do código
        // que é caso das variações inseridas dentro do bloco de fluxo de decisão do IF ELSE IF e ELSE
        let faixaEtaria;
        
        //Neste trecho do código temos um fluxo de decisão onde pra cada faixa etária o sistema segue um comportamento em específico
        //Onde SE(if) a pessoa tiver menos de 12 anos o sistema exibe a informação na tela de que a pessoa é uma criança
        //OU AINDA (elseif) a pessoa informada tiver maior ou igual(=>) a 12 anos e (&&) menor ou igual(<=) a  12 anos o sistema exibe a informação na tela de que a pessoa é um adolescente
        // SENÃO(else) caso não entre nessas duas condições o sistema simplesmente imprime na tela o valor da variável da faixa etária recendo o valor adulto 
        //que corresponde a pessoas maior que(>) 18 anos 

        if (idade <= 12) {
          faixaEtaria = 'criança';
        } else if (idade >= 12 && idade <= 17) {
          faixaEtaria = 'adolescente';
        } else {
          faixaEtaria = 'adulto';
        }
    
        console.log(`Nome: ${nome}, Idade: ${idade}, Email: ${email}, Classificação: ${faixaEtaria}`);
        count++;
      });
    
      return count;
    }
    
  // Aqui estamos exportando a função idadePessoas para o arquivo de testes
module.exports = { idadePessoas };

