const inputTarefa = document.getElementById("tarefa-nova")  

// console.log(inputTarefa.id)

function adicionarTarefa() {


    const item = document.createElement("li")

    item.innerHTML = `<li>
    
    <span>${inputTarefa.value}</span>
    <button class="excluir">x</button>

</li>`;


    const lista = document.querySelector("#lista");
    lista.appendChild(item);

    inputTarefa.value = " "
}


const botaoAdicionar = document.querySelector("#bt-adicional")
botaoAdicionar.addEventListener("Click", adicionarTarefa)



function limparLista() {    
    const lista = document.querySelector("#lista");
    lista.innerHTML = " "
}


const botaoLimpar = document.querySelector(".bt-azul")
botaoLimpar.addEventListener("Click", limparLista)

// adicionarTarefa()
// adicionarTarefa()
// adicionarTarefa()


