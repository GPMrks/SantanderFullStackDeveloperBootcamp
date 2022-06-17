const pessoa = {
    nome: "Mariana",
    idade: 28,
    profissao: "Desenvolvedora"
}

pessoa.idade = 29;

const andre: {nome: string, idade: number, profissao: string} = {
    nome: "André",
    idade: 25,
    profissao: "Pintor"
}

const paula: {nome: string, idade: number, profissao: string} = {
    nome: "Paula",
    idade: 27,
    profissao: "Desenvolvedora"
}

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

const vanessa: Pessoa = {
    nome: "Vanessa",
    idade: 25,
    profissao: Profissao.JogadoraDeFutebol
}

const maria: Pessoa = {
    nome: "Maria",
    idade: 22,
    profissao: Profissao.Desenvolvedora
}

interface Estudante extends Pessoa {
    materias: string[]
}

const jessica: Estudante = {
    nome: "Jéssica",
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materias: ["Matemática Discreta", "Programação"]
}

const monica: Estudante = {
    nome: "Mônica",
    idade: 28,
    materias: ["Matemática Discreta", "Programação"]
}

function listar(lista: string[]) {
    for(const item of lista) {
        console.log("- ", item);
    }
}

listar(monica.materias);