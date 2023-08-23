let diaper;
const babySize = 3;

if (typeof babySize != 'number') {
    diaper = 'Valor inválido'
}
if (babySize <= 4) {
    diaper = 'RN';
} else if (babySize > 4 && babySize <= 6) {
    diaper = 'RN+'
}

console.log('O tamanho da fralda é: ' + diaper);

