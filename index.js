//Javascript correspondant à l'algorithme

let decouAut= prompt("Saisissez votre découvert autorisé");
decouAut=Number(decouAut);

if(decouAut==0){
    alert("Découvert non autorisé, pas d'Agios");
}
while(decouAut<100 || decouAut>2000){
    alert("Le découvert autorisé doit être entre 100 et 2000 euros");
    decouAut= prompt("Saisissez votre découvert autorisé");
    decouAut=Number(decouAut);
}

let decouUtl= prompt("Saisissez votre découvert utilisé");
decouUtl=Number(decouUtl);
let nbrJour= prompt("Depuis combien de jour êtes-vous à découvert");
nbrJour=Number(nbrJour);

while(nbrJour<1 || nbrJour>365){
    alert("Le nombre de jour doit être compris entre 1 et 365");
    nbrJour= prompt("Depuis combien de jour êtes-vous à découvert");
    nbrJour=Number(nbrJour);
}
let varAgios=decouUtl*nbrJour*(10/100)/365;
varAgios=varAgios.toFixed(2);
alert("Avec un taux de 10%, vos agios à payer sont de : "+varAgios+"€");



