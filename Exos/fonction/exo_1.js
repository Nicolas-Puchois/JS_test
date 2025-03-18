function carreDuNombre(nbre) {
  let result = nbre * nbre;
  return `Le carre du nombre ${nbre} est ${result}`;
}

var carreDuNombre2 = (nbre) => {
  let result = nbre * nbre;
  return `Le carre du nombre ${nbre} est ${result} via la fonction flèchée`;
};

console.log(carreDuNombre(7));
console.log(carreDuNombre2(7));
