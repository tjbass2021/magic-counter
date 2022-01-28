let manaAzul = 0;
let manaVerde = 0;
let manaVermelha = 0;
let manaBranca = 0;
let manaPreta = 0;
let manaIncolor = 0;

const CURRENT_MANAZUL = document.getElementById('azul');

const CURRENT_MANAVERDE = document.getElementById('verde');

const CURRENT_MANAVERMELHA = document.getElementById('vermelho');

const CURRENT_MANABRANCA = document.getElementById('branco');

const CURRENT_MANAPRETA = document.getElementById('preto');

const CURRENT_MANAINCOLOR = document.getElementById('incolor');

const CURRENT_RESET = document.getElementById('reset');

function addMana(){
    manaAzul ++;

    CURRENT_MANAZUL.innerHTML = manaAzul;
}

function addManaVerde(){
    manaVerde ++;

    CURRENT_MANAVERDE.innerHTML = manaVerde;
}

function addManaVermelha(){
    manaVermelha ++;

    CURRENT_MANAVERMELHA.innerHTML = manaVermelha;
}

function addManaBranca(){
    manaBranca ++;

    CURRENT_MANABRANCA.innerHTML = manaBranca;
}

function addManaPreta(){
    manaPreta ++;

    CURRENT_MANAPRETA.innerHTML = manaPreta;
}

function addManaIncolor(){
    manaIncolor ++;

    CURRENT_MANAINCOLOR.innerHTML = manaIncolor;
}

// SUBTRAÇÕES


function subMana(){
    manaAzul --;

    CURRENT_MANAZUL.innerHTML = manaAzul;

    if(manaAzul <= 0){
        manaAzul = 0;
        CURRENT_MANAZUL.innerHTML = manaAzul;
    };
}

function subManaVerde(){
    manaVerde --;

    CURRENT_MANAVERDE.innerHTML = manaVerde;

    if(manaVerde <= 0){
        manaVerde = 0;
        CURRENT_MANAVERDE.innerHTML = manaVerde;
    };
}

function subManaVermelha(){
    manaVermelha --;

    CURRENT_MANAVERMELHA.innerHTML = manaVermelha;

    if(manaVermelha <= 0){
        manaVermelha = 0;
        CURRENT_MANAVERMELHA.innerHTML = manaVermelha;
    };
}

function subManaBranca(){
    manaBranca --;

    CURRENT_MANABRANCA.innerHTML = manaBranca;

    if(manaBranca <= 0){
        manaBranca = 0;
        CURRENT_MANABRANCA.innerHTML = manaBranca;
    };
}

function subManaPreta(){
    manaPreta --;

    CURRENT_MANAPRETA.innerHTML = manaPreta;

    if(manaPreta <= 0){
        manaPreta = 0;
        CURRENT_MANAPRETA.innerHTML = manaPreta;
    };
}

function subManaIncolor(){
    manaIncolor --;

    CURRENT_MANAINCOLOR.innerHTML = manaIncolor;

    if(manaIncolor <= 0){
        manaIncolor = 0;
        CURRENT_MANAINCOLOR.innerHTML = manaIncolor;
    };
}



// RESET

function reset(){
    manaAzul = 0;
    manaVermelha = 0;
    manaVerde = 0;
    manaBranca = 0;
    manaPreta = 0;
    manaIncolor = 0;
    
    CURRENT_MANAZUL.innerHTML = manaAzul;
    CURRENT_MANAVERDE.innerHTML = manaVerde;
    CURRENT_MANAVERMELHA.innerHTML = manaVermelha;
    CURRENT_MANABRANCA.innerHTML = manaBranca;
    CURRENT_MANAPRETA.innerHTML = manaPreta;
    CURRENT_MANAINCOLOR.innerHTML = manaIncolor;
}