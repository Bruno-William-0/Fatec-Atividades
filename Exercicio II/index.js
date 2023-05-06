const prompt = require('prompt-sync') ();

const sal = Number(prompt('digite seu salário: '));
const rea = Number(prompt('digite a porcentagem de reajuste: '));

const salf = sal+(sal*(rea/100));

console.log(salf);