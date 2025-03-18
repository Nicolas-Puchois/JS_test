// créer une fonction qui permet de faire la moyenne des notes contenue dans un tableau

let notes = [5, 6, 1, 20, 19, 8, 6, 20, 15];

const moyenneNotes = (tableauNotes) => {
  let result = tableauNotes.reduce((a, b) => a + b) / tableauNotes.length;
  return result;
};

console.log(moyenneNotes(notes));
