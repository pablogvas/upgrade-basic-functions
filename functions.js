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
    for(i=0; i<=param.length; i++) {
        if(param[i]?.length > masLargo.length) {
            masLargo = param[i];
        }
    }
    console.log(masLargo);
}

findLongestWord(avengers);


