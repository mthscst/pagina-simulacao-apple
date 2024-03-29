const imagemVisualizacao = document.getElementById("imagem-visualizacao");
const tituloProduto = document.getElementById("titulo-produto");
const nomeCor = document.getElementById("nome-cor-selecionada");
const miniaturaImagem0 = document.getElementById("0-imagem-miniatura");
const miniaturaImagem1 = document.getElementById("1-imagem-miniatura");
const miniaturaImagem2 = document.getElementById("2-imagem-miniatura");

const verdeCipreste = {
    nome: "Verde-cipreste",
    pasta: "imagens-verde-cipreste"
};
const azulInverno = {
    nome: "Azul-inverno",
    pasta: "imagens-azul-inverno"
};
const meiaNoite = {
    nome: "Meia-noite",
    pasta: "imagens-meia-noite"
};
const estelar = {
    nome: "Estelar",
    pasta: "imagens-estelar"
};
const rosaClaro = {
    nome: "Rosa-claro",
    pasta: "imagens-rosa-claro"
};

const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro]
const opcoesTamanho = [`41mm`, `45mm`];

//variáveis de controle:
let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionada = 1;

//está sendo chamada pelo onclick dos input de id"imagem-visualizacao"
function trocarImagem() {
    //atualizar variável de controle da imagem selecionada
    const idOpcaoSelecionada = document.querySelector(`[name="opcao-imagem"]:checked`).id;
    imagemSelecionada = idOpcaoSelecionada.charAt(0);
    //mudar a imagem de acordo com a seleção 
    imagemVisualizacao.src =`./imagens/opcoes-cores/` + opcoesCores[corSelecionada].pasta + `/imagem-` + imagemSelecionada + `.jpeg`;}

//está sendo chamada pelo onclick das imagens de id"opcoes-tamanho"
function trocarTamanho() {
    //atualizar variável de controle do tamanho da caixa
    const idOpcaoSelecionada = document.querySelector(`[name="opcao-tamanho"]:checked`).id;
    tamanhoSelecionado = idOpcaoSelecionada.charAt(0);
    //mudar o título do produto
    tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].nome +  " para caixa de" + opcoesTamanho[tamanhoSelecionado];
    //mudar o tamanho da imagem de acordo com a opção
    if (opcoesTamanho[tamanhoSelecionado] === `41mm`) {
        imagemVisualizacao.classList.add("caixa-pequena")
    } else {
        imagemVisualizacao.classList.remove("caixa-pequena")
    }
}

function trocarCor(){
    //atualizar variável de controle da cor selecionada
const idOpcaoSelecionada = document.querySelector(`[name="opcao-cor"]:checked`).id;
corSelecionada = idOpcaoSelecionada.charAt(0);
    //trocar título da página de acordo com a cor selecionada
    tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].nome +  " para caixa de" + opcoesTamanho[tamanhoSelecionado];
    //troca título da cor
    nomeCor.innerText = "Cor - " + opcoesCores[corSelecionada].nome;
    //trocar imagem das miniaturas de cores exibidas
    miniaturaImagem0.src = `./imagens/opcoes-cores/` + opcoesCores[corSelecionada].pasta + `/imagem-0.jpeg`;
    miniaturaImagem1.src = `./imagens/opcoes-cores/` + opcoesCores[corSelecionada].pasta + `/imagem-1.jpeg`;
    miniaturaImagem2.src = `./imagens/opcoes-cores/` + opcoesCores[corSelecionada].pasta + `/imagem-2.jpeg`;
    //trocar imagens grandes exibidas de acordo com a cor
    imagemVisualizacao.src =`./imagens/opcoes-cores/` + opcoesCores[corSelecionada].pasta + `/imagem-` + imagemSelecionada + `.jpeg`;
}

