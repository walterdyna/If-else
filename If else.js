/* ------------------Condicionais IF e ELSE------------------

IF    ----> Usado se uma condição e VERDADEIRA
ELSE  ----> Usado caso a condição do IF seja FALSA

IF    ----> SE     ----> Se sim faça ----> Execute o certo
ELSE  ----> SE Não ----> Se não - Não faça IF e Sim Else...

----------------- Operadores de comparação ------------------

> --------> MAIOR QUE
< --------> MENOR QUE
== -------> IGUAL QUE 

 ---------------------- Condicional IF ---------------------- */

const age = 20

if(age >=18) {
    console.log('A pessoa é maior de idade')
}

else {
    console.log('A pessoa NÃO é maior de idade')
}

console.log('Terminou de executar meu codigo')
console.log('----------------------------------------------------')


/* ---------------------- Condicional ELSE ---------------------- */

const age1 = 15

if(age1 >=17) {
    console.log('A pessoa é maior de idade')
}

else {
    console.log('A pessoa NÃO é maior de idade')
}

console.log('Terminou de executar meu codigo')
console.log('----------------------------------------------------')


/* ---------------------- Condicional IF & ELSE ---------------------- */

const aprovado = 6.76
const reprovado = 6.75

if(aprovado >= reprovado){
    console.log(`Aprovado`)
}
else{
    console.log(`Reprovado`)
}

/* ---------------------- Condicional IF & ELSE ---------------------- */

const senha = 123456
const senhaDigitada = 123457

if ( senhaDoUsuario == senhaDigitada){
    console.log("Seja-bem vindo, você está logado")
}
else {
    console.log("Senha incorreta!!!")
}