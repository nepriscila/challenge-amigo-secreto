//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    const adicionarAmigoInput = document.getElementById("adicionarAmigo");
    const adicionarAmigo = adicionarAmigoInput.value.trim();

    if (adicionarAmigo === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    if(amigos.includes(adicionarAmigo)) {
        alert("Nome já adicionado");
        return;
    }

    amigos.push(adicionarAmigo);
    atualizarListaAmigos();
    adicionarAmigoInput.value = "";

    limparLista();
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ("");

    amigos.forEach(amigos => {
        const li = document.createElement("li");
        li.textContent = amigos;
        listaAmigos.appendChild(li);  
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para realizar o sorteio.");
        return;
    }

    const sorteioAleatorio = Math.floor(Math.random() * amigos.length);
    const resultado = amigos[sorteioAleatorio];

   
    document.getElementById("resultado").textContent = 'O amigo secreto é:'+" "+  resultado;

    limparLista();
}

function limparLista() {
    listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
}
