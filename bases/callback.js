// fonction de rappel
function salutation(nom) {
  console.log("Bonjour " + nom);
}

function processUserInput(callback) {
  var nom = prompt("Entrer votre nom : ");
  callback(nom);
}

processUserInput(salutation);
