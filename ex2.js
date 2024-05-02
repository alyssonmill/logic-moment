// Entrada -> array = [2,7,11,15], alvo = 9
// Saída -> [0,1]
// Explicação -> Como 2 (posição 0) + 7 (posição 1) = 9 (alvo)
// retornamos [0,1]

function findIndex (array, alvo){
    for(let i = 0; i < array.length - 1; i++){
        for(let j = i + 1; j < array.length; j++){
            if(array[i] + array[j] === alvo){
                return [i, j];
            } 
        }
    }
}

let array = [2,15,11,7];
let alvo = 9;

let find = findIndex(array, alvo)
console.log(find)