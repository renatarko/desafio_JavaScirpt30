const listaTelefonica = [
  {
    nome: "Renata",
    tel: 991687767,
  },
  {
    nome: "Ana",
    tel: 212145432,
  },
];

function addNumero(nome, tel) {
  // criando um array com os valores dos números para verificar se o novo número passado na chamada da função, já existe.
  const numero = listaTelefonica.map((item) => {
    return item.tel;
  });
  if (numero.includes(tel)) {
    console.log("Este número já foi adcionado!");
    return;
  } else {
    console.log("Número adcionado!");
    listaTelefonica.push({ nome: nome, tel: tel });
  }

  // organizando a lista por ordem alfabética
  listaTelefonica.sort((a, b) => {
    if (a.nome < b.nome) {
      return -1;
    } else {
      return true;
    }
  });
}

addNumero("Aline", 99554458);
addNumero("Thiago", 99554456);
addNumero("Aline Oliveira", 92862007);
addNumero("Gabriel", 33440795);
addNumero("Fernado", 99554457);
addNumero("Ana Paula", 99783457);

// pesquisa dentro do array para encontrar o nome desejado.
const pesquisarNome = listaTelefonica.find((nome) => {
  let name = nome.nome === "Ana";
  return name;
});
console.log(pesquisarNome);
