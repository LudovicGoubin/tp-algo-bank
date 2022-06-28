
// on stock le solde a l'ouverture (depot) et le montant du decouvert dans la sessionStorage ( stockage navigateur )
sessionStorage.setItem('solde', 1500)
sessionStorage.setItem('decouvert', 1000)// a suprimer une fois la partie ouvert du compte est terminé (mergé)!!!!
// on va selectionner l'element html qui a un ID 'html'

let ol = document.getElementById('html')
// on recupere les valeur du solde et decouvert du session storage
let solde = sessionStorage.getItem('solde')
let decouvert= sessionStorage.getItem('decouvert')
// on rajoute des listes a note ol ( a savoir notre solde et decouvert )
// 
ol.innerHTML += `<li>Etat du solde ${solde}</li>`
ol.innerHTML += `<li>decouvert ${decouvert}</li>`





// 1- on recupere l'element qui a un id validation ( bouton de validation), a l'aide de document.querry ou get elemntby id
//2- on greffe un ecouteur d evenement , l'evenement est un clique 
//3-lorsque le bouton sera cliqué , la focntion declaré au sein de la methode  addventlistnner va se declencher 
// 4- les instruction de cette fonction seront exécuté 
//- autrement dit : lors d'un clique sur le boutton avec l'id validation , la fonction associé sera exécuté 
// inner.html quand on a du contenu entre les balises sinon c'est direct sa va leur .value
let btn = document.getElementById('validation')
btn.addEventListener('click', function () {
    let montantretrait = document.getElementById('montantRetrait').value
   
    if (montantretrait > solde + decouvert || isNaN(montantretrait)) {
        document.getElementById('msg').innerHTML = 'le montant de votre retrait ne peut pas etre superieur au montant de votre decouvert autorisé'
    } else {
        document.getElementById('msg').innerHTML = ''
    }
})