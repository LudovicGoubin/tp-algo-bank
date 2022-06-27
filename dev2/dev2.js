
//do{

    let decouvert = prompt("quel est le montant du decouvert autorisé");
    decouvert = Number(decouvert);

//} while (isNaN(decouvert));

//do{

    let solde = prompt('quel le solde de votre compte en cours ');
    solde = Number(solde);

//} while (isNaN(decouvert)) ;
//do{

   let retrait = prompt('quel le montant souhaité du retrait ');
      retrait = Number(retrait);

//} while (isNaN(decouvert));

if(decouvert == 0) {
    if(solde>= retrait){
        retrait = prompt('confirmer le montant de votre retrait ');
        let nouveausolde = solde - retrait ;
        alert('votre nouveau solde est de : ' + nouveausolde);

    } else{
        alert('votre solde est insuffisant');
    }
}
if(decouvert > 0){
    if (retrait <= decouvert){
        retrait = prompt('quel le montant souhaité du retrait ');
        nouveausolde = solde - retrait ;
    
        if(nouveausolde>=0){
            alert ('votre nouveau solde est de : ' + nouveausolde );
            
        }else{
            alert ('votre decouvert est de : ' + nouveausolde )
        }   

    
    }else{
        alert('votre solde est insuffisant');
    }
    }
    




