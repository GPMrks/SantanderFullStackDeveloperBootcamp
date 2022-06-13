const arr = [1, 2, 3, 4, 5];

function somaNumeros(arr) {
    return arr.reduce(function(prev, current) {
        console.log("Previous: ", prev);
        console.log("Current: ", current);
        return prev + current;
    });
}

console.log(somaNumeros(arr));

// ____________________________________________________________________________________________

console.log("____________________________________________________________________________________________\n");

const lista = [
    {
        name: "sabão em pó",
        price: 30,
    },
    {
        name: "cereal",
        price: 12,
    },
    {
        name: "toalha",
        price: 30,
    }
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(prev, current, index) {
        console.log("Rodada ", index + 1);
        console.log({ prev });
        console.log({ current });
        return prev - current.price;
    }, saldoDisponivel)
}

console.log(calculaSaldo(saldoDisponivel, lista));