let contador = 40;

const CURRENT_NUMBER = document.getElementById('tela');


// A repetição de 'if' com a condição de ser igual ou menor que zero para a exibição
// da mensagem de derrota é para evitar que volte-se a exibir os valores numéricos
// na medida em que se aperte os botões de incremento e o valor continue igual ou abaixo de zero.

function incrementPlus(){
    contador = contador + 5;
    CURRENT_NUMBER.innerHTML = contador;

    if(contador<= 0){
        // contador = 'You Lose!'
        CURRENT_NUMBER.innerHTML = 'You Lose!';
    }
}

function decrementPlus() {
    contador = contador - 5;
    CURRENT_NUMBER.innerHTML = contador;

    if(contador<= 0){
        // contador = 'You Lose!'
        CURRENT_NUMBER.innerHTML = 'You Lose!';
    }
}

function increment(){
    contador++;
    CURRENT_NUMBER.innerHTML = contador;

    if(contador<= 0){
        // contador = 'You Lose!'
        CURRENT_NUMBER.innerHTML = 'You Lose!';
    }
}

function decrement(){
    contador--;
    CURRENT_NUMBER.innerHTML = contador;

    if(contador <= 0){
        // contador = 'You Lose!'
        CURRENT_NUMBER.innerHTML = "You Lose!";
    }
}

function reload() {
    contador = 40;
    CURRENT_NUMBER.innerHTML = contador;
}

