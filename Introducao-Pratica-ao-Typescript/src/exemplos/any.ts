var valorAny: any;

valorAny = 1;
valorAny = "Ola";
valorAny = true;

var valorString1: string = "Teste";
valorString1 = valorAny;
var valorString2: string = "Testão";
valorString2 = valorAny;

function somarStrings(string1: string, string2: string) {
    console.log(string1 + string2);
}

somarStrings(valorString1, valorString2); //somou true com true, resultando em 2. Valor ANY se encaixa em qualquer lugar, mesmo tipado.
somarStrings("Olá,", " tudo bem?");