function somme(nbre1, nbre2) {
  let result = nbre1 + nbre2;
  return `La somme des nombres ${nbre1} + ${nbre2} est ${result}`;
}

const somme2 = (nbre1, nbre2) => nbre1 + nbre2;

console.log(somme(4, 5));
console.log(somme2(4, 5));
