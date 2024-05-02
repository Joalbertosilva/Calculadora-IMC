let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

varC = varA;
varB = varC; 
varA = varB; 

console.log(varA, varB, varC);
