// javascript objet tp algobox
// dev1

let deposit;
let overdraft;

alert("Bienvenue chez GTM Bank");
const yesOverdraft = prompt(
  `Souhaitez vous un découvert y OU Y pour oui et autre pour non`
);

if (yesOverdraft == "y" || yesOverdraft == "Y") {
  overdraft = prompt(`Veuillez indiquer le montant de votre découvert`);
  while (parseInt(overdraft) < 100 || parseInt(overdraft) > 2000) {
    alert(
      "Veuillez choisir un montant de découvert entre 100 et 2000 euros svp"
    );
    overdraft = prompt(`Veuillez indiquer le montant de votre découvert`);
  }
  alert(`Le montant de votre découvert est de ${overdraft}`);
  deposit = prompt(`Veuillez indiquer le montant de votre dépot`);
  while (parseInt(deposit) < 500) {
    deposit = prompt(`Veuillez indiquer le montant de votre dépot`);
  }
  deposit = parseInt(deposit);

  alert(
    `Vos informations bancaires sont les suivantes: le solde de votre compte est de ${deposit} et votre découvert autorisé est de ${overdraft}`
  );
} else if (yesOverdraft != "y" || yesOverdraft != "Y") {
  overdraft = 0;
  deposit = prompt(`Veuillez indiquer le montant de votre dépot`);
  while (parseInt(deposit) < 500) {
    deposit = prompt(`Veuillez indiquer le montant de votre dépot`);
  }
  deposit = parseInt(deposit);
  alert(
    `Vos informations bancaires sont les suivantes: le solde de votre compte est de ${deposit} et le montant de votre découvert est de ${overdraft}`
  );
}
// alert(
//   `Vos informations bancaires sont les suivantes: le solde de votre compte est de ${deposit} et le montant de votre découvert est de ${overdraft}`
// );

// dev2

//do{
    let decouvert = prompt("Quel est le montant du decouvert autorisé ?");
    decouvert = Number(decouvert);
    //} while (isNaN(decouvert));
    
    //do{
    let solde = prompt('Quel le solde actuel de votre compte ?');
    solde = Number(solde);
    //} while (isNaN(decouvert)) ;
    
    //do{
    let retrait = prompt('Quel le montant souhaité du retrait ?');
    retrait = Number(retrait);
    //} while (isNaN(decouvert));
    
    
    
    if(decouvert == 0) {
        if(solde>= retrait){
            retrait = prompt('Veuillez confirmer le montant de votre retrait : ');
            let nouveausolde = solde - retrait ;
            alert('Votre nouveau solde est de : ' + nouveausolde);
    } else{
        alert('Votre solde est insuffisant.');
    }
    }
    
    if(decouvert > 0){
        if (retrait <= decouvert){
            retrait = prompt('Confirmer le montant de votre retrait : ');
            nouveausolde = solde - retrait ;
            
            if(nouveausolde>=0){
                alert ('Votre nouveau solde est de : ' + nouveausolde );
            }else{
                alert ('Votre decouvert est de : ' + nouveausolde )
            }
    }else{
        alert('Votre solde est insuffisant.');
    }
    }


// dev3
