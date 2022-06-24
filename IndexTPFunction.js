function Yesdecouvert() {
  overdraft = prompt(`veuillez indiquer le montant de votre découvert`);
  deposit = prompt(`veuillez indiquer le montant de votre dépot`);
  while (isNaN(overdraft) || overdraft < 100 || overdraft > 2000) {
    alert(
      "Veuillez choisir un montant de découvert entre 100 et 2000 euros svp"
    );
    overdraft = prompt(`Veuillez indiquer le montant de votre découvert`);
  }
  alert(`Le montant de votre découvert est de ${overdraft}`);
  deposit = prompt(`Veuillez indiquer le montant de votre dépot`);
  while (isNaN(deposit) < 500) {
    deposit = prompt(
      `Veuillez indiquer un montant de dépot supérieur à 500 euros`
    );
  }
  alert(
    `Vos informations bancaires sont les suivantes: le solde de votre compte est de ${deposit} et votre découvert autorisé est de ${overdraft}`
  );
  return overdraft && deposit;
}

// Yesdecouvert();

window.addEventListener("click", () => {
  // Yesdecouvert();
  Nodecouvert();
});

function Nodecouvert() {
  overdraft = 0;
  deposit = prompt(`Veuillez indiquer le montant de votre dépot bancaire svp`);
  while (isNaN(deposit) || deposit < 500) {
    deposit = prompt(
      "Veuillez déposer un montant supérieur à 500 euros svp MERCI !!!"
    );
  }
  alert(
    `Vos informations bancaires sont les suivantes: le solde de votre compte est de ${deposit} et votre découvert autorisé est de ${overdraft}`
  );
}
