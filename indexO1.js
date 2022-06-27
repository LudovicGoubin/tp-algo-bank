// // javascript objet tp algobox
// // dev1

// class compte {
//     constructor() {
//         this.deposit = 0;
//         this.overdraft = 0;
//     }
//     toHTML() {
//         return "Vos informations bancaires sont les suivantes : " + "<br>" +
//             "Le solde de votre compte est de : " + this.deposit + "<br>" +
//             "Le montant de votre découvert autorisé est de : " + this.overdraft;
//     }

//     withOverdraft() {
//         do {
//             this.overdraft = prompt(`Veuillez indiquer le montant de votre découvert.`);
//             if (isNaN(this.overdraft) || this.overdraft < 100 || this.overdraft > 2000) {
//                 alert("Veuillez choisir un montant de découvert entre 100 et 2000 euros svp");
//             }
//         } while (isNaN(this.overdraft) || this.overdraft < 100 || this.overdraft > 2000);

//         do {
//             this.deposit = prompt("Veuillez indiquer le montant de votre dépot");
//             if (isNaN(this.deposit) || this.deposit < 500) {
//                 alert("Veuillez choisir un montant de dépôt supérieur à 500 euros.");
//             }
//         } while (isNaN(this.deposit) || this.deposit < 500);
//     }
//     withoutOverdraft() {
//         this.overdraft = 0;
//         do {
//             this.deposit = prompt(`Veuillez indiquer le montant de votre dépot`);
//             if (isNaN(this.deposit) || this.deposit < 500) {
//                 alert("Veuillez choisir un montant de dépôt supérieur à 500 euros.");
//             }
//         } while (isNaN(this.deposit) || this.deposit < 500);
//     }
// }


// alert("Bienvenue chez GTM Bank");
// let yesOverdraft = prompt(
//     `Souhaitez vous un découvert y OU Y pour oui et autre pour non`
// );

// let newUser = new compte();

// if (yesOverdraft.toLowerCase() === "y") {
//     // toLowerCase permet d'assimiler les minuscules aux majuscules  
//     newUser.withOverdraft();
// } else {
//     newUser.withoutOverdraft();
// }

// document.write(newUser.toHTML());

// dev2
class bankWithdrawal {

    constructor() {

        this.overdraft = 0,

            this.withdrawal = 0,

            this.account = 0,

            this.newAccount = 0;

    }
    withO() {

        do {

            this.account = prompt('Quel est le solde actuel de votre compte ?');

        } while (isNaN(this.account));

        do {

            this.withdrawal = prompt('Quel est le montant souhaité du retrait ?');

        } while (isNaN(this.withdrawal));



        if (this.withdrawal >= parseInt(this.overdraft + this.account)) {

            alert('Votre solde est insuffisant.');

        } else {

            do {

                this.withdrawal = prompt('Confirmer le montant de votre retrait : ');

            } while (isNaN(this.withdrawal));

            this.newAccount = this.account - this.withdrawal;

            if (this.newAccount >= 0) {

                alert('Votre nouveau solde est de : ' + this.newAccount);

            } else {

                alert('Votre decouvert est de : ' + this.newAccount);

            };



        };

    }

    withoutO() {

        do {

            this.account = prompt('Quel est le solde actuel de votre compte ?');

        } while (isNaN(this.account));

        do {

            this.withdrawal = prompt('Quel est le montant souhaité du retrait ?');

        } while (isNaN(this.withdrawal));

        if (this.account >= this.withdrawal) {

            do {

                this.withdrawal = prompt("Confirmer le montant de votre retrait : ");

            } while (isNaN(this.withdrawal));

            this.newAccount = this.account - this.withdrawal;

            alert('Votre nouveau solde est de : ' + this.newAccount);

        } else {

            alert('Votre solde est insuffisant.');

        }

    }
}
let yesO = 0;

do {

    yesO = prompt("Pour faire un retrait, indiquer le montant du découvert autorisé ?");

} while (isNaN(yesO));

let newWithdrawal = new bankWithdrawal();
if (yesO > 0) {

    newWithdrawal.withO();

} else {

    newWithdrawal.withoutO();

};