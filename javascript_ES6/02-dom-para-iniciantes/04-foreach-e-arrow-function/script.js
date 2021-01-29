// Mostre no console cada parágrado do site
const paragrafo = document.querySelectorAll('p');
paragrafo.forEach((_, index) => {
  console.log(index);
});

// Mostre o texto dos parágrafos no console
paragrafo.forEach((item, index) => {
  console.log(item, index)
})

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);