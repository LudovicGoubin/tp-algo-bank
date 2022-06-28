let yesO = 0;
do {
  yesO = prompt(
    "Pour faire un retrait, indiquer le montant du découvert autorisé ?"
  );
} while (isNaN(yesO));

let newWithdrawal = new bankWithdrawal();
if (yesO > 0) {
  newWithdrawal.withO();
} else {
  newWithdrawal.withoutO();
}

