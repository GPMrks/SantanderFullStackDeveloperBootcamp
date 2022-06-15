types
interfaces

interface IAnimal {
    nome: string;
    tipo: "terrestre" | "aquático";
    executarSom(som: string): void;
    domestico: boolean;
}

interface IFelinos extends IAnimal {
    visaoNoturna: boolean;
}

interface ICanino extends IAnimal {
    porte: "pequeno" | "médio" | "grande";
}

type IDomestico = IFelinos | ICanino;

const elefante: IDomestico = {
    nome: "Elefante",
    tipo: "aquático",
    executarSom: (som) => (`${som}`),
    domestico: false,
    porte: "grande"
}

elefante.executarSom("IIIIRRRLLL");

_______________________________________________________

const input = document.getElementById("input") as HTMLInputElement;

input.addEventListener("input", (event) => {
    console.log("Digitei");
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);
});

_______________________________________________________

Generic Types

function adicionaApendiceALista<T>(array: T[], valor: T) {
    return array.map(() => valor);
}

adicionaApendiceALista([1, 2, 3], 4);

interface IUsuario {
    id: string;
    email: string;
}

interface IAdmin extends IUsuario {
    cargo: "gerente" | "coordenador" | "supervisor";
}

function redirecione(usuario: IAdmin) {
    if("cargo" in usuario) {
        // redirecionar para a área de admin
    }

    // redirecionar para área de usuário
}

ALTERNATIVA

interface IUsuario {
    id: string;
    email: string;
    cargo?: "gerente" | "coordenador" | "supervisor" | "funcionário";
}

function redirecione(usuario: IUsuario) {
    if(usuario.cargo) {
        // redirecionar para a área de admin
    }

    // redirecionar para área de usuário
}

_______________________________________________________

interface Cachorro {
    nome: string;
    idade: number;
    parqueFavorito?: string;
}

class MeuCachorro implements Cachorro {

    readonly nome;
    readonly idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const cao = new MeuCachorro("Apollo", 14);

//cao.idade = 8; => não vai funcionar pois as propriedades estão como readonly

console.log(cao);

_______________________________________________________

interface Pessoa {
    nome: string;
    idade: number;
    nacionalidade: string;
}

interface Brasileiro extends Omit<Pessoa, "nacionalidade"> {

}

const brasileiro: Brasileiro = {
    //apenas nome e idade
}