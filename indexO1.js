// javascript objet tp algobox
// dev1

class compte {
    constructor() {
        this.deposit = 0;
        this.overdraft = 0;
    }
    toHTML() {
        return "Vos informations bancaires sont les suivantes : " + "<br>" +
            "Le solde de votre compte est de : " + this.deposit + "<br>" +
            "Le montant de votre découvert autorisé est de : " + this.overdraft;
    }

    withOverdraft() {
        do {
            this.overdraft = prompt(`Veuillez indiquer le montant de votre découvert.`);
            if (isNaN(this.overdraft) || this.overdraft < 100 || this.overdraft > 2000) {
                alert("Veuillez choisir un montant de découvert entre 100 et 2000 euros svp");
            }
        } while (isNaN(this.overdraft) || this.overdraft < 100 || this.overdraft > 2000);

        do {
            this.deposit = prompt("Veuillez indiquer le montant de votre dépot");
            if (isNaN(this.deposit) || this.deposit < 500) {
                alert("Veuillez choisir un montant de dépôt supérieur à 500 euros.");
            }
        } while (isNaN(this.deposit) || this.deposit < 500);
    }
        withoutOverdraft() {
            this.overdraft = 0;
            do {
                this.deposit = prompt(`Veuillez indiquer le montant de votre dépot`);
                if (isNaN(this.deposit) || this.deposit < 500) {
                    alert("Veuillez choisir un montant de dépôt supérieur à 500 euros.");
                }
            } while (isNaN(this.deposit) || this.deposit < 500);
        }
    }


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