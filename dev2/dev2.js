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