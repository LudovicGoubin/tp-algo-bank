let yesOverdraft = prompt(`Avez vous autorisé les découverts ?`);
let newAgios = new BankAgios();
if (yesOverdraft == "Y" || yesOverdraft == "y") {
  newAgios.resagios();
} else {
  alert(`Vous n'avez pas de découvert autorisé donc pas d'agios`);
}
