// javascript objet tp algobox
// dev1

class compte {
  constructor() {
    this.deposit = 0;
    this.overdraft = 0;
  }
  toString() {
    return (
      "Vos informations bancaires sont les suivantes : " +
      "\n" +
      "Le solde de votre compte est de : " +
      this.deposit +
      "\n" +
      "Le montant de votre découvert autorisé est de : " +
      this.overdraft
    );
  }
  withOverdraft() {
    do {
      this.overdraft = prompt(
        `Veuillez indiquer le montant de votre découvert`
      );
      if (
        isNaN(this.overdraft) ||
        this.overdraft < 100 ||
        this.overdraft > 2000
      ) {
        alert(
          "Veuillez choisir un montant de découvert entre 100 et 2000 euros svp"
        );
      }
    } while (
      isNaN(this.overdraft) ||
      this.overdraft < 100 ||
      this.overdraft > 2000
    );
    alert(
      "Veuillez choisir un montant de découvert entre 100 et 2000 euros svp"
    );
    do {
      this.deposit = prompt(`Veuillez indiquer le montant de votre dépot`);
    } while (isNaN(this.deposit) || this.deposit < 500);
  }
  noOverdraft() {
    this.overdraft = 0;
    do {
      this.deposit = prompt(`Veuillez indiquer le montant de votre dépot`);
    } while (isNaN(this.deposit) || this.deposit < 500);
  }
}

alert("Bienvenue chez GTM Bank");
const yesOverdraft = prompt(
  `Souhaitez vous un découvert y OU Y pour oui et autre pour non`
);

if (yesOverdraft.toLowerCase() === "y") {
  // toLowerCase permet d'assimiler les minuscules aux majuscules
  const newUser = new compte();
  newUser.withOverdraft();
} else {
  const newUser = new compte();
  newUser.noOverdraft();
}

document.write(newUser.toString());
// if (yesOverdraft == "y" || yesOverdraft == "Y") {
//   do {
//     this.overdraft = prompt(`Veuillez indiquer le montant de votre découvert`);
//   } while (isNaN(this.overdraft));
//   alert("Veuillez choisir un montant de découvert entre 100 et 2000 euros svp");
//   do {
//     this.overdraft = prompt(`Veuillez indiquer le montant de votre découvert`);
//   } while (
//     isNaN(this.overdraft) ||
//     this.overdraft < 100 ||
//     this.overdraft > 2000
//   );
//   do {
//     this.deposit = prompt(`Veuillez indiquer le montant de votre dépot`);
//   } while (isNaN(this.deposit) || this.deposit < 500);
// } else if (yesOverdraft != "y" || yesOverdraft != "Y") {
//   this.overdraft = 0;
//   do {
//     this.deposit = prompt(`Veuillez indiquer le montant de votre dépot`);
//   } while (isNaN(this.deposit) || this.deposit < 500);
// }

/*
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

let decouAut = prompt("Saisissez votre découvert autorisé");
decouAut = Number(decouAut);

if (decouAut == 0) {
    alert("Découvert non autorisé, pas d'Agios");
}
while (decouAut < 100 || decouAut > 2000) {
    alert("Le découvert autorisé doit être entre 100 et 2000 euros");
    decouAut = prompt("Saisissez votre découvert autorisé");
    decouAut = Number(decouAut);
}

let decouUtl = prompt("Saisissez votre découvert utilisé");
decouUtl = Number(decouUtl);
while (decouUtl > decouAut) {
    alert("Votre découvert utilisé ne peut pas être supérieur à votre découvert autorisé");
    decouUtl = prompt("Saisissez votre découvert utilisé");
    decouUtl = Number(decouUtl);
}

let nbrJour = prompt("Depuis combien de jour êtes-vous à découvert");
nbrJour = Number(nbrJour);

while (nbrJour < 1 || nbrJour > 365) {
    alert("Le nombre de jour doit être compris entre 1 et 365");
    nbrJour = prompt("Depuis combien de jour êtes-vous à découvert");
    nbrJour = Number(nbrJour);
}
let varAgios = decouUtl * nbrJour * (10 / 100) / 365;
varAgios = varAgios.toFixed(2);
alert("Avec un taux de 10%, vos agios à payer sont de : " + varAgios + "€");
*/
