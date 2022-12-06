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


