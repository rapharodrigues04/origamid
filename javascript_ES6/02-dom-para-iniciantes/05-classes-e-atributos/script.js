// Adicione a classe ativo a todos os itens do menu
const ClasseMenu = document.querySelectorAll(".menu a");
ClasseMenu.forEach((item) => item.classList.add("ativo"));

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
ClasseMenu.forEach((item) => item.classList.remove("ativo"));

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll("img");
imgs.forEach((item) => {
  const possuiOAtributo = item.hasAttribute("alt");
  console.log(possuiOAtributo);
});

// Modifique o href do link externo no menu
ClasseMenu.forEach((item) => {
  item.setAttribute("href", "https://www.js.com.br");
});
