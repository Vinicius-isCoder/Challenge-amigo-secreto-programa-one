let listaDeAmigos = [];

function adicionarAmigo() {
    let input = document.querySelector('input');
    let nomeAmigo = input.value.trim();

    if (listaDeAmigos.includes(nomeAmigo)) {
        alert('Nome já presente na lista');
    } else {
        if (nomeAmigo != '' &&  !/[0-9]/.test(nomeAmigo)) {
            listaDeAmigos.push(nomeAmigo);
            console.log(listaDeAmigos);
            atualizarLista();
            input.value = '';
        } else {
            alert('Digite um nome válido');
            input.value = '';
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
        let mensagem = `O amigo secreto sorteado é: ${ganhador}`;
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = mensagem;
    } else {
        alert('Não há nenhum nome para ser sorteado');
    }
}