const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button');
const form = document.querySelector('.login-form');

const validateInput = ({ target }) => {
   if (target.value.length > 2) { //através do target se consegue acessar o elemento que dispara o evento
    button.removeAttribute('disabled');
    return; //vai ler a função, chegou no return ele vai acabar a função
   } 
   button.setAttribute('disabled' , '');
      
}

const handleSubmit = (event) => {
   event.preventDefault(); // evento que serve para bloquear o evento padrão do formulário
   localStorage.setItem('player' , input.value); //o método setItem serve para salvar um novo item no localstorage. Ele espera dois parametros: o primeiro é a chave o valor que quero salvar (nesse caso é o player) que é o nome que a pessoa digitar no input
   window.location = 'game.html';
}

input.addEventListener('input' , validateInput);
form.addEventListener('submit' , handleSubmit); //evento de submit (quando o formulário for enviado)