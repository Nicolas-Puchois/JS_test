// créer une fonction qui permet d'afficher une à une toute les valeurs contenues dans un tableau

let names = ["toto", "tata", "titi"];

const displayName = (nameArray = []) => {
  for (value of nameArray) {
    console.log(value);
  }
};

displayName(names);
