// Duplique o menu e adicione ele em copy
const selecionarMenu = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const cloneTitulo = selecionarMenu.cloneNode(true);
copy.appendChild(cloneTitulo);

// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector('.faq-lista');
const primeitoDT = faq.querySelector('dt');
console.log(primeitoDT);

// Selecione o DD referente ao primeiro DT
const proxDD = primeitoDT.nextElementSibling;
console.log(proxDD);

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais');
faq.innerHTML = animais.innerHTML