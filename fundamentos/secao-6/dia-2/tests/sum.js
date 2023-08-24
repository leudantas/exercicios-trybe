const validateSum = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Os valores devem ser números!')
}
}

const sum = (a, b) => {
    try {
        validateSum(a, b);
        return a + b;
    
    } catch (error) {
        return error.message;
    }
};

console.log(sum('2', 2));

module.exports = sum;
