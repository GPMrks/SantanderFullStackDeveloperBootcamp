const pessoa1 = {
    nome: "Maria",
    idade: 30
}

const pessoa2 = {
    nome: "Carla",
    idade: 26
}

const animal = {
    nome: "Fiona",
    idade: 5,
    raca: "Pug"
}

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

console.log(calculaIdade.call(pessoa1, 30));
console.log(calculaIdade.apply(pessoa2, [20]));
console.log(calculaIdade.call(animal, 7));