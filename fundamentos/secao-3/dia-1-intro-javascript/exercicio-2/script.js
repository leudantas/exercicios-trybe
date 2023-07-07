//Exercício 2
//Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas variáveis com os valores que serão comparados.

let num1 = 8
let num2 = 2

if (num1 > num2) {
    console.log(num1);
} else {
    console.log(num2);
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


