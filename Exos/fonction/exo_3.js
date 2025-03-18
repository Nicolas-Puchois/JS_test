let numbers = [5, 6, 4, 10, 35];
let numbers2 = [4, 8, 9, 34];

// function sommeDuTableau(tableau1) {
//   const result = tableau1.reduce((a, b) => a + b);
//   return result;
// }

function sommeDuTableau(tableau1) {
  let somme = 0;
  for (valeur of tableau1) {
    somme = somme + valeur;
  }
  return somme;
}

const sommeDuTableau2 = (tableau1) => {
  const somme = tableau1.reduce((a, b) => a + b);
  return somme;
};

console.log(sommeDuTableau(numbers));
console.log(sommeDuTableau(numbers2));
console.log(sommeDuTableau2(numbers));
console.log(sommeDuTableau2(numbers2));
