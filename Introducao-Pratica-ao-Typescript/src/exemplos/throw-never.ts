let anyEstadeVolta: any;
anyEstadeVolta = 3;
anyEstadeVolta = "teste";
anyEstadeVolta = 5;

let stringTeste: string = "verificar";
stringTeste = anyEstadeVolta;

let unknownValor: unknown;
unknownValor = 3;
unknownValor = "opa";
unknownValor = true;
unknownValor = "vai sim";

let stringTeste2: string = "Agora vai";

if(typeof unknownValor === "string"){
    stringTeste2 = unknownValor;
}

function jogaErro(erro: string, codigo: number): never{
    throw {error: erro, code: codigo}
}

jogaErro("Deu erro", 500);

console.log("Teste pós erro"); //throw joga erro e interrompe código - Unreacheble code