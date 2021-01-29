// Verifique a distância da primeira imagem
// em relação ao topo da página
const img = document.querySelector('img');
console.log(img.offsetTop);

// Retorne a soma da largura de todas as imagens

window.onload = function somaImagens(){
  const imagens = document.querySelectorAll('img');
  imagens.forEach((imagem) => {
    console.log(imagem.offsetWidth)
  })
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');
links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;
  if(linkWidth > 48 && linkWidth > 48) {
    console.log('Possui Acessibilidade')
  } else {
    console.log('Não Possui Acessibilidade')
  }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const browser = window.matchMedia('(max-width: 720px)').matches;
if(browser) {
  const menu = document.querySelector('.menu');
  menu.classList.add('menu-mobile');
}