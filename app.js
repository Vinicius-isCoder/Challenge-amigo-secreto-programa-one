let listaDeAmigos = [];
let listaDeMensagem = document.getElementById('mensagens');
let resultado = document.getElementById('resultado');
let campoInput = document.getElementById('amigo');
let botaoAdicionar = document.getElementById('adicao');

function keyAdicionarAmigo(event) {
    if (event.key === 'Enter') {
        adicionarAmigo();
    }
}

function adicionarAmigo() {
    let nomeAmigo = campoInput.value.trim();

    if (listaDeAmigos.includes(nomeAmigo)) {
        listaDeMensagem.innerHTML = 'Nome já presente na lista';
    } else {
        if (nomeAmigo != '' &&  !/[0-9]/.test(nomeAmigo)) {
            listaDeAmigos.push(nomeAmigo);
            console.log(listaDeAmigos);
            atualizarLista();
            campoInput.value = '';
            listaDeMensagem.innerHTML = '';
        } else {
            listaDeMensagem.innerHTML = 'Digite um nome válido';
            campoInput.value = '';
        }
    }
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < listaDeAmigos.length; i++) {
        let amigo = listaDeAmigos[i];
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (listaDeAmigos.length > 0) {
        let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
        let ganhador = listaDeAmigos[indiceAleatorio];
        let mensagemGanhador = `O amigo secreto sorteado é: ${ganhador}`;
        resultado.innerHTML = mensagemGanhador;
        campoInput.disabled = true;
        botaoAdicionar.disabled = true;
    } else {
        listaDeMensagem.innerHTML = 'Não há nomes para o sorteio';
    }
}

function limparLista() {
    if (listaDeAmigos.length > 0) {
        listaDeAmigos = [];
        atualizarLista();
        campoInput.disabled = false;
        botaoAdicionar.disabled = false;
        resultado.innerHTML = '';
    } else {
        listaDeMensagem.innerHTML = 'A lista já está vazia.';
    }
}