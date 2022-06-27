// javascript objet tp algobox
// dev1

class compte {
  constructor() {
    (this.deposit = 0),
      (this.overdraft = 0),
      (this.withdrawal = 0),
      (this.account = 0),
      (this.newAccount = 0),
      (this.usedOverdraft = 0),
      (this.days = 0),
      (this.agios = 0);
  }
  toHTML() {
    return (
      "Vos informations bancaires sont les suivantes : " +
      "<br>" +
      "Le solde de votre compte est de : " +
      this.deposit +
      "<br>" +
      "Le montant de votre découvert autorisé est de : " +
      this.overdraft
    );
  }

  withOverdraft() {
    do {
      this.overdraft = prompt(
        `Veuillez indiquer le montant de votre découvert.`
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

  withO() {
    do {
      this.account = prompt("Quel est le solde actuel de votre compte ?");
    } while (isNaN(this.account));

    do {
      this.withdrawal = prompt("Quel est le montant souhaité du retrait ?");
    } while (isNaN(this.withdrawal));

    if (this.withdrawal >= parseInt(this.overdraft + this.account)) {
      alert("Votre solde est insuffisant.");
    } else {
      do {
        this.withdrawal = prompt("Confirmer le montant de votre retrait : ");
      } while (isNaN(this.withdrawal));
      this.newAccount = this.account - this.withdrawal;

      if (this.newAccount >= 0) {
        alert("Votre nouveau solde est de : " + this.newAccount);
      } else {
        alert("Votre decouvert est de : " + this.newAccount);
      }
    }
  }

  withoutO() {
    do {
      this.account = prompt("Quel est le solde actuel de votre compte ?");
    } while (isNaN(this.account));

    do {
      this.withdrawal = prompt("Quel est le montant souhaité du retrait ?");
    } while (isNaN(this.withdrawal));

    if (this.account >= this.withdrawal) {
      do {
        this.withdrawal = prompt("Confirmer le montant de votre retrait : ");
      } while (isNaN(this.withdrawal));

      this.newAccount = this.account - this.withdrawal;

      alert("Votre nouveau solde est de : " + this.newAccount);
    } else {
      alert("Votre solde est insuffisant.");
    }
  }

  resagios() {
    do {
      this.overdraft = prompt(`Renseignez le montant de votre découvert`);
      if (
        this.overdraft < 100 ||
        this.overdraft > 2000 ||
        isNaN(this.overdraft)
      ) {
        alert("Le découvert autorisé doit être entre 100 et 2000 euros");
      }
    } while (
      isNaN(this.overdraft) ||
      this.overdraft < 100 ||
      this.overdraft > 2000
    );

    do {
      this.usedOverdraft = prompt(
        `Saisissez le montant de votre découvert utilisé ?`
      );
      if (this.usedOverdraft > this.overdraft || isNaN(this.usedOverdraft)) {
        alert(
          `le montant de votre découvert utilisé ne doit pas dépasser le montant de votre découvert autorisé`
        );
      }
    } while (this.usedOverdraft > this.overdraft || isNaN(this.usedOverdraft));

    if (this.usedOverdraft > 0) {
      do {
        this.days = prompt(`Depuis combien de jour etes vous à découvert ?`);
        if (isNaN(this.days) || this.days < 1 || this.days > 365) {
          alert(`Veuillez indiquer une période entre 1 et 365 jours svp`);
        }
      } while (isNaN(this.days) || this.days < 1 || this.days > 365);

      this.agios = (this.usedOverdraft * this.days * 0.1) / 365;
      this.agios = this.agios.toFixed(2);
      alert(`Le montant de vos agios à payer est de ${this.agios} €€€`);
    } else {
      alert(
        `Vous n'avez pas utilisé de découvert donc vous n'avez pas d'agios`
      );
    }
  }
}
