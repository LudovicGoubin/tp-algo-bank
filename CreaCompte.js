let choice = document.getElementById("choice");

choice.addEventListener("input", function () {
  let choice_value;

  choice_value = document.querySelectorAll("input[name=yesOverdraft]");

  for (let i = 0; i < choice_value.length; i++) {
    console.log(choice_value[i].checked, choice_value[i].value);

    if (choice_value[i].checked && choice_value[i].value == "y") {
      document.querySelector("#hidden").style.visibility = "visible";
    } else if (choice_value[i].checked && choice_value[i].value == "n") {
      document.querySelector("#hidden").style.visibility = "hidden";
    }
  }
});

/// Ou

document.getElementById("deposit").disabled = false;

///document.querySelector('#deposit').removeAttribute('disabled')
