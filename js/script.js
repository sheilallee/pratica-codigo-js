const usuarios = [];

function inserirUsuario() {
    const nome = document.querySelector('#nome').value;
    const idade = document.querySelector('#idade').value;
    const cpf = document.querySelector('#cpf').value;

    const usuario = JSON.stringify({
        nome: nome,
        idade: idade,
        cpf: cpf
    });

    usuarios.push(usuario);
    inserirUsuarioNaLista(usuario);

    document.querySelector('#nome').value = '';
    document.querySelector('#idade').value = '';
    document.querySelector('#cpf').value = '';
}

function inserirUsuarioNaLista(usuarioJSON) {
    const listaUsuariosElement = document.querySelector('#listaUsuarios');
    const liElement = document.createElement('li');

    const usuario = JSON.parse(usuarioJSON);
    liElement.textContent = `${usuario.nome} - ${usuario.idade} - ${usuario.cpf}`;

    const botaoRemoverElement = document.createElement('button');
    botaoRemoverElement.textContent = 'X';
    botaoRemoverElement.addEventListener('click', () => {
        liElement.remove();
    });

    // Anexar o botão de remoção à linha do usuário
    liElement.appendChild(botaoRemoverElement);
    listaUsuariosElement.appendChild(liElement);
}

function aplicarMascaraCPF(cpf) {
    cpf = cpf.replace(/\D/g, "");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return cpf;
}

document.querySelector("#cpf").addEventListener("input", function(event) {
    event.target.value = aplicarMascaraCPF(event.target.value);
});




/*
const nomes = ['Ana', 'Carla', 'Trísia'];

const listaNomesElement = document.createElement('ul');
document.body.appendChild(listaNomesElement);

for (let nome of nomes) {
    inserirNomeNaLista(nome);
}

function inserirNome() {
    const inputNomeElement = document.querySelector('#nome');
    inserirNomeNaLista(inputNomeElement.value);
}

function inserirNomeNaLista(nome) {
    const liElement = document.createElement('li');
    const botaoRemoverElement = document.createElement('button');
    botaoRemoverElement.textContent = 'X';
    botaoRemoverElement.addEventListener('click', (event) => {
        liElement.remove();
    });

    const spanElement = document.createElement('span');
    spanElement.textContent = nome + ' ';

    spanElement.addEventListener('click', event => {
        const inputElement = document.createElement('input');
        inputElement.value = nome;
        liElement.appendChild(inputElement);
        spanElement.remove();
    });

    liElement.appendChild(spanElement);
    liElement.appendChild(botaoRemoverElement);

    listaNomesElement.appendChild(liElement);
}

*/
