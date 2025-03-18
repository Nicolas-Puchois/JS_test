let age = 0;
let pattern_age = /^\d{1,2}$/;
// console.log("age :", typeof age, "valeur:", age);

let text_afficher = "Vous êtes ";
let test_regex_age = true;

do {
  //   if (!test_regex_age) {
  //     age = parseInt(prompt("Veuillez saisir uniquement un nombre : "));
  //   } else {
  //     age = parseInt(prompt("Veuillez saisir vote age : "));
  //   }

  age = parseInt(
    prompt(
      `Veuillez saisir ${!test_regex_age ? " un nombre : " : " vote age : "}`
    )
  );
  test_regex_age = pattern_age.test(age);
} while (!test_regex_age);

// while (isNaN(age)) {
//   age = parseInt(prompt("Veuillez saisir uniquement un nombre : "));
// }

if (age >= 18) {
  console.log(`${text_afficher} majeur`);
} else if (age < 18 && age != 12) {
  console.log(`${text_afficher} mineur`);
} else if (age == 12) {
  console.log("Bug");
}
