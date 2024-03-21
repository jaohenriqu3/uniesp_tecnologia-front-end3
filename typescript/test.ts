import { somar }  from "./functions";

//Tipando variaveis
let nome: string = "João"
let array: number[] = []

// Adicionando elementos no array 
console.log(nome)
array.push(1)

console.log(somar(1,2))

// Ao tipar uma função obrigatoriamente tem que ter um retorno 
// npx ts-node test.ts -> (testa)
//tsc --init -> tsconfig.ts