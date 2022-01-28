let contador = 40;

const CURRENT_NUMBER = document.getElementById('tela');

function incrementPlus(){
    contador = contador + 5;
    CURRENT_NUMBER.innerHTML = contador;
}

function decrementPlus() {
    contador = contador - 5;
    CURRENT_NUMBER.innerHTML = contador;
}

function increment(){
    contador++;
    CURRENT_NUMBER.innerHTML = contador;
}

function decrement(){
    contador--;
    CURRENT_NUMBER.innerHTML = contador;
}

function reload() {
    contador = 40;
    CURRENT_NUMBER.innerHTML = contador;
}