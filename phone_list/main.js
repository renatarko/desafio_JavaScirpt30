const form = document.querySelector("form");
// const send = document.querySelector("button");
let p = document.querySelector("p");

let contatos = localStorage.getItem("meusContatos");

if (contatos) {
  contatos = JSON.parse(contatos);
} else {
  contatos = [];
}
console.log(contatos);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let nome = document.getElementById("nome").value.toLowerCase();
  let tel = document.getElementById("telefone").value;

  if (!nome || !tel != "") {
    p.innerHTML = "Preencha os campos";
    return;
  }

  const novoContato = new Object();
  novoContato.nome = nome;
  novoContato.telefone = tel;

  const contatosSalvos = contatos.map((item) => {
    return item.telefone && item.nome;
  });

  if (contatosSalvos.includes(tel) || contatosSalvos.includes(nome)) {
    p.innerHTML = "Este número ou nome já foram salvos";
    return;
  }

  contatos.push(novoContato);

  localStorage.setItem("meusContatos", JSON.stringify(contatos));

  // localStorage.clear();
});
criarListaDeContatos();

// function adcionar(nome, tel) {
//   if (nome && tel != "") {
//     return (p.innerHTML = "Digite apenas números válidos no campo número");
//   }

// }

const letra = "roberto";
// pegando a primeira letra da string
if (letra.substring(-1, 1) == "a") {
  // console.log("essa letra A");
} else {
  // console.log("essa letra não é A");
}

function ordemAlfabetica() {
  contatos.sort((a, b) => {
    if (a.nome < b.nome) {
      return -1;
    } else {
      return true;
    }
  });
}

function criarListaDeContatos() {
  ordemAlfabetica();

  const body = document.querySelector("body");
  const ul = document.querySelector("ul");

  body.appendChild(ul);

  contatos.forEach((contato) => {
    const li = document.createElement("li");
    const span = document.createElement("span");

    li.setAttribute(
      "style",
      "text-transform: uppercase; display: flex; justify-content: space-between; margin-bottom: 10px"
    );
    li.style.textTransform = "uppercase";
    li.innerHTML = contato.nome;

    span.setAttribute("style", "color: blue;");
    span.innerHTML = contato.telefone;

    ul.appendChild(li);
    li.appendChild(span);
  });
}

let buscar = document.getElementById("pesquisar");

buscar.addEventListener("keydown", (e) => {
  buscar = e.target.value;

  pesquisar(contatos, buscar);

  console.log(buscar);
});

function pesquisar(contatos, buscar) {
  const filtro = contatos.filter((item) => item.nome.includes(buscar));
  console.log(filtro);

  if (filtro) {
    const ul = document.createElement("ul");
    const body = document.querySelector("body");

    body.appendChild(ul);

    const li = document.createElement("li");
    li.style.color = "red";

    li.innerHTML = filtro;

    ul.appendChild(li);
  }

  // novaLista(filtro);
}
