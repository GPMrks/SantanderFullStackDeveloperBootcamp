let numeros = [1, 3, 4, 6, 80, 33, 23, 90];

function substituiPares(numeros) {
    
    if (!numeros) return -1;
    if (!numeros.length) return -1;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] === 0) {
            console.log("Você já é zero!!");
        } else if (numeros[i] % 2 === 0) {
            console.log(`Substituindo ${numeros[i]} por 0...`);
            numeros[i] = 0;
        }
    }

    return numeros;
}

console.log(substituiPares(numeros));