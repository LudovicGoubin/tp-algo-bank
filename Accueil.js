let btnAccount = document.querySelector("input[name=newCompte]")
btnAccount.addEventListener ("click", function(){
    location.href = "http://127.0.0.1:5500/newAccount.html";
});


let btnRetrait = document.querySelector("input[name=retrait]")
btnRetrait.addEventListener ("click", function(){
    location.href = "http://127.0.0.1:5501/Retrait.html";
});

let btnAgios = document.querySelector("input[name=agios]")
btnAgios.addEventListener ("click", function(){
    location.href = "http://127.0.0.1:5500/Agios.html";
});
