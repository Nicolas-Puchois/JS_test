// créer une fonction qui prend un tablea d'age en entrée et
// et qui retourne le nombre de personnes majeures

let monTableau = [5, 25, 18, 9, 5, 36];

const tableauMajeure = monTableau.filter((number) => number >= 18);

console.log(tableauMajeure.length);
