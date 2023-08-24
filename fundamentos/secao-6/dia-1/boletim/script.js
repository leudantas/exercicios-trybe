const validarMedia = (n1, n2, n3, n4) => {
    if (typeof n1 !== 'number' || typeof n2 !== 'number' || typeof n3 !== 'number' || typeof n4 !== 'number') {
        throw new Error('Atenção! Os valores devem ser numéricos');
    }
}

const calcularMedia = (n1, n2, n3, n4) => {
    try {
        validarMedia(n1, n2, n3, n4);
        let soma = n1 + n2 + n3 + n4;
        let media = soma / 4;
        return media;
        
    } catch (error) {
    return error.message;
    }
}

console.log(calcularMedia('2', 2, 3, 3));