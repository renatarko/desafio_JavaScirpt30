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
    p.setAttribute("style", "color: red; margin-top: 1rem");
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
    p.setAttribute("style", "color: red; margin-top: 1rem");
    p.innerHTML = "Este número ou nome já foram salvos";
    return;
  }

  contatos.push(novoContato);
  p.setAttribute("style", "color: green; margin-top: 1rem");
  p.innerHTML = "Contato Salvo";

  nome = "";
  tel = "";

  localStorage.setItem("meusContatos", JSON.stringify(contatos));

  // localStorage.clear();
});

criarListaDeContatos();

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

  let listaAlfabetica = contatos.map((contato) => {
    criarLista(contato);
  });

  return listaAlfabetica;
}

function criarLista(contato) {
  const body = document.querySelector("body");
  const ul = document.querySelector("ul");

  body.appendChild(ul);
  let li = document.createElement("li");
  const span = document.createElement("span");

  li.setAttribute(
    "style",
    "text-transform: uppercase; display: flex; justify-content: space-between; margin-bottom: 10px"
  );
  li.style.textTransform = "uppercase";
  li.innerHTML = contato.nome;

  span.setAttribute("style", "color: blue;");
  span.innerHTML = contato.telefone;

  li.appendChild(span);
  ul.appendChild(li);
}

let buscar = document.getElementById("pesquisar");

buscar.addEventListener("keydown", (e) => {
  buscar = e.target.value;

  if (buscar) {
    let resultadoDaFuncao = criarListaDeContatos();

    resultadoDaFuncao = resultadoDaFuncao = [];
    const ul = document.querySelector("ul");

    ul.innerHTML = resultadoDaFuncao;

    pesquisar(buscar);
  }
  // console.log(buscar);
});

function pesquisar(buscar) {
  document.querySelector(".result").innerHTML = "";

  let filtro = contatos.filter((item) => item.nome.includes(buscar));

  if (filtro.length > 0) {
    filtro.map((item) => {
      criarLista(item);
    });
  } else {
    document.querySelector(".result").innerHTML = "Contato não encontrado";
  }
}
