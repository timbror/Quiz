let svaradeFragor = []
let fragaJustNu = 0;
let id = 0;
let korrektaSvar = 0;
let mangdAvFragor;

// Mängd av frågor som användaren väljer
function startaQuiz(){
    mangdAvFragor = document.getElementById("mangdAvFragor").value;
    fraga(0)
}

// Funktionen som bestämmer vilken fråga som ska visas upp
function fraga(id){
    console.log(id)
    let nuvarandeFraga = document.getElementById("nuvarandeFraga");
    nuvarandeFraga.innerHTML = quizFragor[id].fraga;
    let val1 = document.getElementById("val1");
    val1.innerHTML = quizFragor[id].val[0][1];
    let val2 = document.getElementById("val2");
    val2.innerHTML = quizFragor[id].val[0][2];
    let val3 = document.getElementById("val3");
    val3.innerHTML = quizFragor[id].val[0][3];
}

const quizFragor = [
    {
        id: 1,
        fraga: "Vem gjorde det första målet i allsvenskan 2018?",
        val: [{
            1: "Elias Mar Omarsson, IFK Göteborg",
            2: "Moestapha El Kabir, Häcken",
            3: "Jiloan Hamad, Hammarby"
        }],
        svar: 3
    },
    {
        id: 2,
        fraga: "Vem vann skytteligan i allsvenskan 2018?",
        val: [{
            1: "Linus Hallenius, Gif Sundsvall",
            2: "Paulinho, Häcken",
            3: "Nikola Djurdjic, Hammarby"
        }],
        svar: 2
    },
    {
        id: 3,
        fraga: "Vem vann assistligan i allsvenskan??",
        val: [{
            1: "Nahir Besara, Örebro SK",
            2: "Eric Larsson, Malmö FF",
            3: "Hosam Aiesh, Östersunds FK"
        }],
        svar: 3
    },
    {
        id: 4,
        fraga: "Vilket lag vann publikliga?",
        val: [{
            1: "Hammarby",
            2: "Östersunds FK",
            3: "IFK Norrköping"
        }],
        svar: 1
    },
    {
        id: 5,
        fraga: "Vem gjorde flest straffmål (6 stycken) i allsvenskan 2018?",
        val: [{
            1: "Markus Rosenberg, Malmö FF",
            2: "Jiloan Hamad, Hammarby",
            3: "Henok Goitom, AIK"
        }],
        svar: 2
    },
    {
        id: 6,
        fraga: "Vem drog på sig flest varningar under säsongen 2018?",
        val: [{
            1: "Jeppe Andersen, Hammarby IF",
            2: "Alexander Faltsetas, Häcken",
            3: "Juan Ciercoles, Gif Sundsvall"
        }],
        svar: 3
    },
    {
        id: 7,
        fraga: "Vilket lag gjorde flest mål under säsongen?",
        val: [{
            1: "Häcken",
            2: "AIK",
            3: "Hammarby"
        }],
        svar: 1
    },
    {
        id: 8,
        fraga: "Vem blev utsedd till årets mest värdefulla spelare på Allsvenskans Stora Pris?",
        val: [{
            1: "Kristoffer Olsson, AIK",
            2: "Nikola Djurdjic, Hammarby",
            3: "Paulinho, Häcken"
        }],
        svar: 3
    },
    {
        id: 9,
        fraga: "Vem var förste tränaren att sparkas/lämna under säsongen?",
        val: [{
            1: "Magnus Pehrsson, Malmö FF",
            2: "Azrudin Valentic, Dalkurd",
            3: "Luis Pimenta, BP"
        }],
        svar: 1
    },
    {
        id: 10,
        fraga: "Endast en utespelare spelade samtliga minuter i allsvenskan, vem?",
        val: [{
            1: "Per Karlsson, AIK",
            2: "Daniel Björnkvist, Örebro SK",
            3: "Jonathan Tamimi, Gif Sundsvall"
        }],
        svar: 1
    }
]

//Validera ett svar, öka fråga med 1, om det är samma som max-antal av frågor användaren har valt
// så rättar vi frågorna
function valideraSvar(svar){
    svaradeFragor.push(svar);
    fragaJustNu++;
    if (fragaJustNu == mangdAvFragor){
        rattaFragor();
    }
    fraga(fragaJustNu);
}

//Rättar alla frågor och skriver ut det på sidan
function rattaFragor(){
    document.getElementById("quiz").innerHTML = "";
    for (svar in svaradeFragor){
        if (svaradeFragor[svar] == quizFragor[svar].svar){
            korrektaSvar++;
        }
    };
    document.getElementById("quizKlar").innerHTML = `Du fick ${korrektaSvar} rätt på ${mangdAvFragor} frågor!`;
}
