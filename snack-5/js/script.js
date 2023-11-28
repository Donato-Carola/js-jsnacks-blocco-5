/*Creare un array di oggetti di squadre di volley.
Ogni squadra avrà diverse proprietà: nome, punti fatti e falli subiti.
Generare numeri random al posto delle nelle proprietà:
punti fatti e falli subiti*/

const squadreVolley=[
    {nome:'Juve',
    puntiFatti : numeroRandom(10,400),
     falliSubiti:numeroRandom(10,400),
    },
    {nome:'Juve',
     puntiFatti : numeroRandom(10,400),
     falliSubiti:numeroRandom(10,400),

    },
    {nome:'Juve',
    puntiFatti : numeroRandom(10,400),
    falliSubiti:numeroRandom(10,400),
    },
    {nome:'Juve',
    puntiFatti : numeroRandom(10,400),
     falliSubiti:numeroRandom(10,400),

    },
    {nome:'Juve',
    puntiFatti : numeroRandom(10,400),
     falliSubiti:numeroRandom(10,400),

    },
]

function numeroRandom(min,max){
    return Math.floor(Math.random() * max - min) + min;
}

console.log(squadreVolley)