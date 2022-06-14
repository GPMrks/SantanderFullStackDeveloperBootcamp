// A função gets() é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print() para imprimir a saída (output) de dados e já pula uma linha ("\n")

let lines = gets().split("\n");

let line = lines.shift().split(' ');
let soma = 0

for(i=0;i < line.length ;i++){
  let transfor = parseInt(line[i]);
  soma = soma + parseInt(line[i]);
}
print(soma-3)