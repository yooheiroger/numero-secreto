//let titulo = document.querySelector("h1");
//titulo.innerHTML = "Jogo do número Secreto";

//let paragrafo = document.querySelector("p");
//paragrafo.innerHTML = "Escolha um número entre 1 e 10";

//outra forma de se executar melhor para varais ações
let listaDeNumerosSorteados = []; // criar uma lista utiliza simplesmente as chaves ao final da criação da variavel.
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela (tag, texto){
    let campo = document.querySelector (tag) ;
    campo.innerHTML =  texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2}); // entre os parenteses esta o paramentro do que sera falado no caso a variavel texto ou seja tudo que é texto sera falado, segundo é a linguagem e depois é a velocidade que sera falado


}
function exibirMensagemInicial(){
exibirTextoNaTela ("h1", "jogo Do Número Secreto");
exibirTextoNaTela ("p", "Escolha um numero entre 1 a 100");
}
exibirMensagemInicial();

function verificarChute (){
    let chute = document.querySelector("input").value;

    if (chute == numeroSecreto){
        exibirTextoNaTela ("h1", "Voce Acertou");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela ("p", mensagemTentativas) ;
        document.getElementById ("reiniciar").removeAttribute("disabled");  
        }else{
        if (chute > numeroSecreto){
            exibirTextoNaTela ("p", "O numero é menor");
        }       else {
                exibirTextoNaTela ("p", "O numero é maior");
            }
            tentativas++
            limparCampo();

    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido =  parseInt (Math.random() *numeroLimite+1);
    let qunaantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (qunaantidadeDeElementosNaLista = numeroLimite){
        listaDeNumerosSorteados= []
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) { //o ".includes" serve para verificar se algo esta na lista (lista criada la em cima []com colchetes)
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido); // o ".push serve para adicionar algo ao final da lista (a lista esta criada com os [] la em cima)
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }

}

function limparCampo(){
    chute = document.querySelector ("input");
    chute.value = "";

   

    }
       

    function reiniciarJogo(){
        numeroSecreto = gerarNumeroAleatorio(); 
        limparCampo();
        tentativas = 1;
        exibirMensagemInicial();
        document.getElementById("reiniciar").setAttribute("disabled", true)
        
    }
