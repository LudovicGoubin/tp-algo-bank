alert("Bienvenue chez GTM Bank");

let yesOverdraft = prompt(
  `Souhaitez vous un découvert y OU Y pour oui et autre pour non`
);

let newUser = new compte();

if (yesOverdraft.toLowerCase() === "y") {
  // toLowerCase permet d'assimiler les minuscules aux majuscules
  newUser.withOverdraft();
} else {
  newUser.withoutOverdraft();
}

document.write(newUser.toHTML());
