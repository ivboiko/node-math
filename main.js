const { NodeMath } = require('math');

const arr = [0, -5, 8, 17, 9, 11, 3, 1, 2];
const minNumber = NodeMath.min(arr);
console.log(`Min number: ${minNumber}\n`);

const sumResult = NodeMath.sum(2, 3);
console.log(`Sum: ${sumResult}\n`);

const numberAbs = NodeMath.abs(-5);
console.log(`Abs: ${numberAbs}\n`);
