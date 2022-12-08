// Iteración #1 //

sum(27,10);

function sum(numberOne , numberTwo) {
    if(numberOne>=numberTwo) {
        console.log(numberOne);
    }
    else {
        console.log(numberTwo);
    }
}

// Iteración #2 //

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(param) {
    let masLargo = param[0];
    for(i=0; i<param.length; i++) {
        if(param[i].length > masLargo.length) {
            masLargo = param[i];
        }
    }
    console.log(masLargo);
}

findLongestWord(avengers);


// Iteración #3 //

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
    let resultado = 0;
    for(i=0; i<param.length; i++) {
        resultado += param[i];
    }
    console.log(resultado);
}

sumAll(numbers);


// Iteración #4 //

const numbers2 = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
    let media = 0;
    for(i=0; i<param.length; i++) {
        media += param[i];
    }
    console.log(media / numbers2.length);
}
average(numbers2);


// Iteración #5 //

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
    let totalString = 0;
    let totalNum = 0;
    for(i=0; i<param.length; i++) {
        if(typeof param[i] === "string") {
            totalString += param[i].length;
        }
        if(typeof param[i] === "number") {
            totalNum += param[i];
        }
    }
    let mediaTotal = totalString + totalNum;
    console.log(mediaTotal/param.length);
}
averageWord(mixedElements);


// Iteración #6 //

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
];

function removeDuplicates(param) {
    let resultado = [];

    for (let elem of param) {
      if (resultado.indexOf(elem) === -1) {
        resultado.push(elem);
      }
    }
    console.log(resultado);
}

removeDuplicates(duplicates);


// Iteración #7 //

const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
function finderName(param, valor) {
    let posicion = 0;
    for(i=0; i<param.length; i++) {
        if(param[i] === valor) {
            console.log(true);
            posicion += i;
        }
    }
    console.log(posicion);
}

finderName(nameFinder, 'Xabier');


// Iteración #8 //

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
];
function repeatCounter(param, valor) {
    let numRepetidas = 0;
    for(i=0; i<param.length; i++) {
        if(param[i] === valor) {
            numRepetidas += 1;
        }
    }
    console.log(numRepetidas);
}

repeatCounter(counterWords, 'code');