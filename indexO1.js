// javascript objet tp algobox
// dev1
//// copie 

export class compte {
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

  withO() {
    if (this.withdrawal >= parseInt(this.overdraft + this.account)) {
      alert("Votre solde est insuffisant.");
    } else {
      this.newAccount = this.account - this.withdrawal;
    }
  }

  withoutO() {
    if (this.account >= this.withdrawal) {
      this.newAccount = this.account - this.withdrawal;
    } else {
      alert("Votre solde est insuffisant.");
    }
  }

  resagios() {
    if (this.usedOverdraft == 0) {
      alert(
        `Vous n'avez pas utilisé de découvert donc vous n'avez pas d'agios`
      )}
      if(this.usedOverdraft > 0){
    this.agios = (this.usedOverdraft * this.days * 0.1) / 365;
    this.agios = this.agios.toFixed(2);
    return this.agios
    }
  }
}