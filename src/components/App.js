import letras from "../data/letras/letras.js";
const spanPlayer = document.querySelector('.player');
// const timer = document.querySelector('.timer');

export const endGame = () => {
  const disabledCard = document.querySelectorAll(".disabled-card");
  if (disabledCard.length === 10) {
    alert("Parabéns!!! Você conseguiu!!!");
  }
};

export const exibeCard = (vogais) => {
  const card = createElement("div", "card");
  const front = createElement("div", "face front");
  const back = createElement("div", "face back");
  front.style.backgroundImage = `url('${vogais}')`; //PARA CONSEGUIR PASSAR VARIÁVEIS DENTRO DE STRINGS

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener("click", revealCard);
  card.setAttribute("data-vogais", vogais); //aqui estou dando um atributo com o nome das vogais para as vogais

  return card;
};

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
};

const revealCard = ({ target }) => {
  //função para clicar na carta ela virar
  if (target.parentNode.className.includes("revealCard")) {
    //se eu clicar na carta que contem a tag revealCard não vai acontecer nada.
    return;
  }

  if (firstCard === "") {
    target.parentNode.classList.add("reveal-card");
    firstCard = target.parentNode;
  } else if (secondCard === "") {
    target.parentNode.classList.add("reveal-card");
    secondCard = target.parentNode;
    checkCards();
  }
};

let firstCard = "";
let secondCard = "";

const checkCards = () => {
  console.log(firstCard, secondCard);
  
  const firstVogal = firstCard.getAttribute("data-vogais");
  const secondVogal = secondCard.getAttribute("data-vogais");

  if (firstVogal === secondVogal) {
    firstCard.firstChild.classList.add("disabled-card");
    secondCard.firstChild.classList.add("disabled-card");

    firstCard = "";
    secondCard = "";

    endGame();
  } else {
    setTimeout(() => {
      firstCard.classList.remove("reveal-card");
      secondCard.classList.remove("reveal-card");

      firstCard = "";
      secondCard = "";
    }, 500);
  }
}

const App = () => {
  
  const dupliCard = [...letras.items, ...letras.items];

  //PARA EMBARALHAR AS CARTAS
  const shuffledArray = dupliCard.sort(() => Math.random() - 0.5); //ESSA FUNÇÃO RETORNA UM NÚMERO ALEATÓRIO ENTRE 0 E 1 DE FORMA ALEATÓRIA
  const banana = (document.createElement ("main"))
  shuffledArray.forEach((vogais) => {
    const card = exibeCard(vogais.image);
    banana.appendChild(card);
  });

  // const startTimer = () => {
  //   setInterval(() => {

  //     const currentTimer = +timer.innerHTML;
  //     timer.innerHTML = currentTimer + 1;
  //   }, 1000);

  // }

  window.onload = () => {
    spanPlayer.innerHTML = localStorage.getItem('player');
    //startTimer();
  }
  return banana;
};

export default App;

