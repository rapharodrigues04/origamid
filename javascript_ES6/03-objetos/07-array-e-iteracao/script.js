// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = document.querySelectorAll(".curso");
const arrayCursos = Array.from(cursos);

const objetoCurso = arrayCursos.map((curso) => {
  const cursoTitulo = curso.querySelector("h1").innerText;
  const cursoDescricao = curso.querySelector("p").innerText;
  const cursoAula = curso.querySelector(".aulas").innerText;
  const cursoHora = curso.querySelector(".horas").innerText;
  return {
    cursoTitulo,
    cursoDescricao,
    cursoAula,
    cursoHora,
  };
});
console.log(objetoCurso);
console.log(arrayCursos);

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const maiorQue100 = numeros.filter((x) => {
  return x > 100;
});
console.log(maiorQue100);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];

const temBaixo = instrumentos.some((baixo) => {
  return baixo === "Baixo";
});
console.log(temBaixo);

// Retorne o valor total das compras
const compras = [
  {
    item: "Banana",
    preco: "R$ 4,99",
  },
  {
    item: "Ovo",
    preco: "R$ 2,99",
  },
  {
    item: "Carne",
    preco: "R$ 25,49",
  },
  {
    item: "Refrigerante",
    preco: "R$ 5,35",
  },
  {
    item: "Quejo",
    preco: "R$ 10,60",
  },
];

console.log(compras);

const limpaPreco = compras.map((item) => {
  return +item.preco.replace("R$ ", "").replace(",", ".");
});

let soma = 0;
const somatorio = limpaPreco.forEach((item) => {
  soma = soma + item;
});
console.log(soma);
