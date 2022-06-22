let deposit = parseInt("");
let overdraft = parseInt("");
let balance = parseInt("");
const yesOverdraft = prompt(`Souhaitez vous un découvert ${""}`)

alert("Bienvenue chez GTM Bank");

if (yesOverdraft == "y") OR (yesOverdraft == "Y") {
    let overdraft; 
    prompt(overdraft);
    while (overdraft<100) AND (overdraft>2000) {
        alert("Veuillez choisir un montant de découert entre 100 et 2000 euros svp");
        prompt(`Choisissez votre découvert autorisé ${overdraft}`)
    }
    alert(`Le montant de votre découvert est de ${overdraft}`);
    prompt(`Veuillez indiquer le montant de votre dépot ${deposit}`);
    while (deposit<500) {
        prompt(deposit);
    }
    else {
        let overdraft = 0;
        prompt(`Veuillez indiquer le montant de votre dépot ${deposit}`);
        while (deposit<500) {
            alert(`Le montant de votre dépot doit etre supérieur à ${deposit}`)
            prompt(`Veuillez indiquer le montant de votre dépot ${deposit}`);
        }
    }
    alert(`Vos informations bancaires sont les suivantes: le solde de votre compte est de ${deposit} et votre découvert autorisé est de ${overdraft}`)
};

alert(`Vos informations bancaires sont les suivantes: le solde de votre compte est de ${deposit} et votre découvert autorisé est de ${overdraft}`)