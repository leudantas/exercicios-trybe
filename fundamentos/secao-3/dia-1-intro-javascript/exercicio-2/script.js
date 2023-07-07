//Exercício 2
//Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas variáveis com os valores que serão comparados.

let num1 = 8
let num2 = 2

if (num1 > num2) {
    console.log('num1');
} else {
    console.log('num2');
}

//Exercício 3
//Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados.

let num3 = 4
let num4 = 10
let num5 = 3

if (num3 > num4 && num3 > num5) {
    console.log(num3);
} else if (num4 > num3 && num4 > num5) {
    console.log(num4);
} else {
    console.log(num5)
};

//Exercício 4
//Utilize if...else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

let ang1 = 60
let ang2 = 60
let ang3 = 59
let triangulo = true

if (ang1 < 0 || ang2 < 0 || ang3 < 0) {
    console.log('Erro! Ângulo inválido')
} else {
    if (ang1 + ang2 + ang3 === 180) {
    triangulo = true
    } else {
    triangulo = false
    }
    console.log(triangulo);
}

//Exercício 5
//Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.

let numero = 1;

switch (numero) {
    case 1:
        console.log('numero 1')
        break;
    case 2:
        console.log('numero 2')
        break;
    default:
        console.log('outro número');
        break;
}

let xadrez = 'torre'

switch (xadrez) {
    case 'bispo':
        console.log('diagonal');
        break;
    case 'torre':
        console.log('qualquer casa reto');
        break;
    case 'peão':
        console.log('uma casa pra frente');
        break;
    case 'rainha':
        console.log('qualquer lado');
        break;
    case 'rei':
        console.log('qualquer uma casa');
        break;
    case 'cavalo':
        console.log('em L');
        break;
    default:
        break;
}

//Exercício 6
//Utilize if...else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, o código deve retornar false.
//Faça esse exercício utilizando somente um if.

let num6 = 21
let num7 = 15
let num8 = 11
let numPar = true

if (num6 % 2 === 0 || num7 % 2 === 0 || num8 % 2 === 0) {
    numPar = true;
} else {
    numPar = false;
}

console.log(numPar);

//Exercício 7
//Utilize if...else para escrever um código que, dado um salário bruto, calcule o salário líquido a ser recebido.
//Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS (Instituto Nacional do Seguro Social) e o IR (Imposto de Renda).
//⭐️ A notação para um salário de R$1.500,10, por exemplo, deve ser 1500.10.

/* let salarioBruto = 3500.00
let salarioLiquido;
let impostoINSS;
let impostoRenda;

switch (salarioBruto) {
    case (salarioBruto <= 1556.94):
        impostoINSS = (salarioBruto * 0.08)
        break;
    case (salarioBruto >= 1556.95 && salarioBruto <= 2594.92):
        impostoINSS = (salarioBruto * 0.09)
        break;
    case (salarioBruto >= 2594.93 && salarioBruto <= 5189.82):
        impostoINSS = (salarioBruto * 0.11)
        break;
    case (salarioBruto > 5189.82) :
        impostoINSS = 570.88;
        break;
    default:
        break;
}

console.log(impostoINSS); */

let salarioBruto = 3500.00
let impostoINSS;

if (salarioBruto <= 1556.94) {
    impostoINSS = (salarioBruto * 0.08)
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    impostoINSS = (salarioBruto * 0.09)
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    impostoINSS = (salarioBruto * 0.11)
} else {
    impostoINSS = 570.88
}

let salarioBase = salarioBruto - impostoINSS

let impostoRenda;

if (salarioBase <= 1903.98) {
    impostoRenda = 0
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    impostoRenda = (salarioBase * 0.075 - 142.80)
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    impostoRenda = (salarioBase * 0.15 - 354.80)
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    impostoRenda = (salarioBase * 0.225 - 636.13)
} else {
    impostoRenda = (salarioBase * 0.275 - 869.36)
}

let salarioLiquido = salarioBase - impostoRenda

console.log(`O salário bruto é R$${salarioBruto}
O imposto INSS é R$${impostoINSS}
O salário base é R$${salarioBase}
O imposto de renda é R$${impostoRenda}
O salário líquido é R$${salarioLiquido}`);
