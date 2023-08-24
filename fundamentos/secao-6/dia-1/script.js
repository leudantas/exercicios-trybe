// // Sem usar throw
// const sum = (value1, value2) => {
//     if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//       return 'Os valores devem ser numéricos';
//     }
//     return value1 + value2;
//   };

const { error, log } = require("console")

  
//   console.log(`Sem usar throw: ${sum(2, '3')}`);

  // Usando throw

  // const sum2 = (value3, value4) => {
  //   if (typeof value3 !== 'number' || typeof value4 !== 'number') {
  //     throw new Error('Os valores devem ser numéricos');
  //   }
  //   return value3 + value4;
  // };
  
  // console.log(sum2(2, '3'));

  // Usando throw e try/catch

  const verifyNumber = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      throw new Error('The values must be numbers');
    }
  };

  const sum = (value1, value2) => {
    try {
      verifyNumber(value1, value2);
      return value1 + value2;
     } catch (error) {
      return error.message;
     }
  };

  console.log(sum(2, `3`));